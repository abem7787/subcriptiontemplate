import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Container, Row, Col, Alert, Spinner } from "react-bootstrap";

function SubscriptionEdits() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch("http://localhost:3001/plans");
      if (!response.ok) {
        throw new Error("Failed to fetch plans");
      }
      const data = await response.json();
      setPlans(data);
    } catch (error) {
      setError(error.message); // Set error state
      console.error("Error fetching plans:", error);
    } finally {
      setLoading(false); // Stop loading once the fetch is done
    }
  };

  if (loading) {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col md="auto">
            <Spinner animation="border" />
            <p>Loading plans...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid>
        <Row>
          <Col md="12">
            <Alert variant="danger">
              <strong>Error:</strong> {error}
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <h1>Subscription Plans</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id}> {/* Use a unique identifier for the key */}
                  <td>{plan.name}</td>
                  <td>{plan.price}</td>
                  <td>{plan.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default SubscriptionEdits;
