import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import moment from 'moment';


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";




function Dashboard() {

  const [subscriptions, setSubscriptions] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [register, setRegister] = useState([]);
  const [subscriptionStats, setSubscriptionStats] = useState(null);
  useEffect(() => {
    fetchSubscriptions();
    fetchRegister();
  }, []);

  useEffect(() => {
    calculateSubscriptionStats(subscriptions);
  }, [subscriptions]);

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch("http://localhost:3001/subscription");
      const data = await response.json();
      setSubscriptions(data);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching subscription data:", error);
    }
  };



  const fetchRegister = async () => {
    try {
      const response = await fetch("http://localhost:3001/register");
      const data = await response.json();
      setRegister(data)
    } catch (error) {
      console.error("Error fetching subscription data:", error);
    }
  };

  const combinedSubscriptions = subscriptions.map((subscription, index) => {
    if (subscription.name === subscription.name && subscription.selectedPlan) {
      return {
        ...subscription,
        ...subscription.selectedPlan
      };
    } else {
      return subscription;
    }
  });

  // Handle cancel button click
  // Handle cancel button click

  const handleCancel = async (subscriptionId) => {
    try {
      const response = await fetch(`http://localhost:3001/subscription/${subscriptionId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setSubscriptions(prevSubscriptions => prevSubscriptions.filter(sub => sub.id !== subscriptionId));

        // Increment the cancel orders count in the register state
        const updatedRegister = register.map(item => {
          if (item.id === subscriptionId) {
            return { ...item, cancelOrders: (item.cancelOrders || 0) + 1 };
          }
          return item;
        });
        setRegister(updatedRegister);

        setLastUpdated(new Date()); // Update last updated time
      } else {
        console.error('Failed to delete subscription');
      }
    } catch (error) {
      console.error('Error deleting subscription:', error);
    }
  };

  const totalRevenue = subscriptions.reduce((total, subscription) => {
    return total + (subscription.selectedPlan ? subscription.selectedPlan.price : 0);
  }, 0);


  const totalCancelOrders = register.reduce((total, item) => {
    return total + (item.cancelOrders || 0);
  }, 0);



  const calculateSubscriptionStats = (data) => {
    const basicCount = data.filter(sub => sub.selectedPlan && sub.selectedPlan.planname === "Basic").length;
    const standardCount = data.filter(sub => sub.selectedPlan && sub.selectedPlan.planname === "Standard").length;
    const premiumCount = data.filter(sub => sub.selectedPlan && sub.selectedPlan.planname === "Premium").length;

    const totalSubscriptions = data.length;
    setSubscriptionStats({
      basic: (basicCount / totalSubscriptions) * 100,
      standard: (standardCount / totalSubscriptions) * 100,
      premium: (premiumCount / totalSubscriptions) * 100,
    });
  };
  console.log(combinedSubscriptions)
  return (
    <>

      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number</p>
                      <Card.Title as="h4">150GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">$ {totalRevenue.toFixed(2)}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last updated: {lastUpdated ? lastUpdated.toLocaleString() : "N/A"}
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Cancel Orders</p>
                      <Card.Title as="h4">{totalCancelOrders}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Customers</p>
                      <Card.Title as="h4">+{subscriptions.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Users Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Subscription Statistics</Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                {subscriptionStats && (
                  <div className="legend">
                    <p className="text-warning">Basic: {subscriptionStats.basic.toFixed(2)}%</p>
                    <p className="text-danger">Standard: {subscriptionStats.standard.toFixed(2)}%</p>
                    <p className="text-info">Premium: {subscriptionStats.premium.toFixed(2)}%</p>
                  </div>
                )}
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Subscription Plans</Card.Title>
                <p className="card-category">Revenue by Plan</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: ["Basic", "Standard", "Premium"],
                      series: [
                        [
                          combinedSubscriptions.filter(subscription => subscription.selectedPlan && subscription.selectedPlan.planname === "Basic").length,
                          combinedSubscriptions.filter(subscription => subscription.selectedPlan && subscription.selectedPlan.planname === "Standard").length,
                          combinedSubscriptions.filter(subscription => subscription.selectedPlan && subscription.selectedPlan.planname === "Premium").length,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      axisX: {
                        showGrid: false,
                      },
                      axisY: {
                        onlyInteger: true, // Ensure Y-axis values are integers
                      },
                      height: "245px",
                      classNames: {
                        bar: 'ct-bar', // Add a class to bars for styling
                      },
                      // Define colors for each series
                      seriesBarDistance: 10,
                      low: 0,
                      high: 10,
                    }}
                    listener={{
                      created: function (data) {
                        // Add custom classes to each series
                        data.svg.elem('rect', {
                          x: data.options.axisX.offset + data.x1 + 5,
                          y: data.y1 + 5,
                          width: 30,
                          height: 30,
                          fill: '#ff0000', // Set color for Basic
                        }, data.options.classNames.bar);

                        data.svg.elem('rect', {
                          x: data.options.axisX.offset + data.x2 + 5,
                          y: data.y2 + 5,
                          width: 30,
                          height: 30,
                          fill: '#0000ff', // Set color for Standard
                        }, data.options.classNames.bar);

                        data.svg.elem('rect', {
                          x: data.options.axisX.offset + data.x3 + 5,
                          y: data.y3 + 5,
                          width: 30,
                          height: 30,
                          fill: '#ffff00', // Set color for Premium
                        }, data.options.classNames.bar);
                      }
                    }}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-warning"></i> Basic {" "}
                  <i className="fas fa-circle text-danger"></i> Standard{" "}
                  <i className="fas fa-circle text-info"></i> Premium
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer>
            </Card>


          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Customer Accounts</Card.Title>
                <p className="card-category">Backend development</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <table className="table">
                    <thead className="thead">
                      <tr>
                        <th>Cancel</th> {/* Change "Select" to "Cancel" */}
                        <th className="name">Name</th>
                        <th className="email">Email</th>
                        <th className="amount">Amount</th>
                        <th className="plan">Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(subscriptions) && subscriptions.length > 0 ? (
                        subscriptions.map((subscription, index) => (
                          <tr key={index}>
                            <td>
                              {subscription.selectedPlan && (
                                <Button
                                  variant="danger"
                                  onClick={() => handleCancel(subscription.id)}
                                >
                                  Cancel
                                </Button>
                              )}
                            </td>
                            <td>{subscription.name}</td>
                            <td>{subscription.email}</td>
                            <td>{subscription.selectedPlan ? subscription.selectedPlan.price : ''}</td>
                            <td>{subscription.selectedPlan ? subscription.selectedPlan.planname : ''}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No subscriptions available</td>
                        </tr>
                      )}

                    </tbody>
                  </table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>

        </Row>
      </Container>

    </>
  );
}

export default Dashboard;
