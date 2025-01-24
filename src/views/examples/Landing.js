
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Link } from "react-router-dom";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                {/* <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span /> */}
              </div>

              <Container className="py-lg-md mb-md-1 d-flex mt-7">
                <div className="col px-0">

                  <Row>
                    <Container className="container-lg">
                      <Row lg="2">
                        <Col className="mb-5 mb-md-5" md="6">
                          <h7 className="display-3 text-white" style={{ fontSize: '2.00rem' }}>
                          Right Angle Tech: Streamline Your Web, Mobile, and Software Development with Scalable Design Systems and Generative AI.
                          {/* <span>— Featuring Practical, Ready-to-Use Examples</span> */}
                          </h7>

                          <p className="lead text-white">
                          Accelerate Your Development while focusing on the efficiency boost that generative AI can bring to the development process.
                          Our design system includes four fully customizable, pre-built pages, designed to accelerate your development process. Easily adapt the content and visuals to fit your unique needs, and you'll be up and running in no time.
                          </p>
                          <div className="btn-wrapper">
                            {/* <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          to="/register-page"
                        >

                          <span className="btn-inner--text">Join Now</span>
                        </Button> */}

                   <Button
                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                   color="default"
                    href="tel:+13478155674">
                      <span className="btn-inner--text ml-1">
                        Call Now</span></Button>

                            {/* <Button
                              className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                              color="default"
                              to="/register-page" tag={Link}
                            >

                              <span className="btn-inner--text">
                                Learn More
                              </span>
                            </Button> */}
                          </div>
                        </Col>
                        <Col className="mb-5 mb-lg-0" md="6">
                          <Card className="card-lift--hover shadow border-0">
                            <Link to="/">
                              <CardImg class="h-10"
                                alt="..."
                                src={require("assets/img/brand/increqmain.png")}
                              />
                            </Link>
                          </Card>
                        </Col>
                      </Row>
                    </Container>

                  </Row>
                </div>


              </Container>


              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>

          </div>
       
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/brand/increqimg2.png")}
                  />

                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                    Traditional task management tools allow users to set dependencies between tasks, specifying that Task B cannot start until Task A is completed, for example. However, with dynamic task dependencies, the software takes this concept to the next level by automatically adjusting task dependencies based on real-time changes and conditions.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/brand/harvardcs50.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                      CS50 Harvard University
                      </h4>
                      <p className="lead text-italic text-white">
                      CS50 from Harvard University, which has provided me with a solid foundation in computer science. Equipped with essential skills in programming, algorithms, data structures, and problem-solving, which form the backbone of hands-on experience in artificial intelligence (AI) and software development, where I have applied these foundational skills to build intelligent systems to develop mobile applications, and complex real-world challenges
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                
                <Col md="6">
                  <div className="pl-md-5">
                  <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/brand/abe7878.jpg")}
                      style={{ width: "200px" }}
                    />
                      <div className="text-center">
  <h5 className="text-center mt-5">
    <span className="d-block mb-1">Abraham Mirambeaux</span>
    <small className="h6 text-left">
      Software Engineer
    </small>
  </h5>
</div>

                    <h3>About Me</h3>
                    <p className="lead">
                    As a Software Engineer and a graduate of CS50 from Harvard University, I have gained a strong foundation in computer science that enables me to build efficient, scalable, and secure software solutions. 
    </p>
    <p>
    Through hands-on experience with programming languages like Python, C, and SQL, as well as mastery in algorithms, data structures, and problem-solving techniques, I focus on creating high-performance applications. My expertise allows me to develop software solutions that solve complex real-world challenges and drive impactful results.
    </p>
    <p>
    I have also worked with cutting-edge technologies in artificial intelligence (AI), integrating smart systems and automation into various products. This experience has further honed my skills in designing systems that not only perform well but also scale seamlessly.

    </p>
  
<p className="lead">
  Our work management software serves diverse industries, from technology and finance to healthcare, manufacturing, and education. Whether it's small startups or large enterprises, our tools are tailored to meet the unique needs of businesses of all sizes and complexities.
</p>

<p>
   Providin solutions that streamline workflows, boost productivity, and manage everything from agile software development to marketing campaign launches.
</p>


                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
            
              <Col className="order-lg-1" lg="8">
  <div className="d-flex px-3">
    <div>
      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
        <i className="ni ni-building text-primary" />
      </div>
    </div>
    <div className="pl-4">
      <h4 className="display-3 text-white">Modern Interface</h4>
      <p className="text-white">
        Flat design, characterized by its absence of gradients, shadows, and three-dimensional effects, is a hallmark of modern interfaces. Flat design elements such as flat icons, buttons, and illustrations contribute to a sleek and contemporary aesthetic.
      </p>
    </div>
  </div>

  <div className="d-flex px-3 mt-5">
    <a href="https://hotel-booking-sites.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img
        alt="Hotel & Spa"
        className="img-center img-fluid"
        src={require("assets/img/brand/hotel & Spa.jpg")}
      />
    </a>
  </div>

  <div className="d-flex px-3 mt-5">
    <a href="https://fitness-lp.pages.dev/" target="_blank" rel="noopener noreferrer">
      <img
        alt="Gym"
        className="img-center img-fluid"
        src={require("assets/img/gym.jpg")}
      />
    </a>
  </div>

  <div className="d-flex px-3 mt-5">
    <a href="https://react-adb-mui.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img
        alt="Graphs"
        className="img-center img-fluid"
        src={require("assets/img/brand/graphs.jpg")}
      />
    </a>
  </div>
</Col>

              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
         
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  {/* <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Developer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div> */}
                </Col>

                {/* <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">Designer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col> */}
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  {/* <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div> */}
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Create a Project Plan</h2>
                  <p className="lead text-white">
                  Develop a detailed project plan outlining the tasks, milestones, timelines, and dependencies. Break down the project into manageable phases or iterations to facilitate execution and tracking.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>

                <Card >
        


  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                      <img alt="..."
                      src={require("assets/img/Review.jpg")}
                      style={{ width: "700px" }}/>

                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>

                    
                  </Card>
                  <Card >
        


        <Row>
                          <Col className="collapse-brand" xs="6">
                            <Link to="/">
                            <img alt="..."
                            src={require("assets/img/Review.jpg")}
                            style={{ width: "700px" }}/>
      
                            </Link>
                          </Col>
                          <Col className="collapse-close" xs="6">
                            <button className="navbar-toggler" id="navbar_global">
                              <span />
                              <span />
                            </button>
                          </Col>
                        </Row>
      
                          
                        </Card>
                        <Card >
        


        <Row>
                          <Col className="collapse-brand" xs="6">
                            <Link to="/">
                            <img alt="..."
                            src={require("assets/img/Review.jpg")}
                            style={{ width: "700px" }}/>
      
                            </Link>
                          </Col>
                          <Col className="collapse-close" xs="6">
                            <button className="navbar-toggler" id="navbar_global">
                              <span />
                              <span />
                            </button>
                          </Col>
                        </Row>
      
                          
                        </Card>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row>
             
                  <Card >
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>

                    
                  </Card>

 
    
           
              </Row>
            </Container>
          </section>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
