import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import { Link } from "react-router-dom";
import TextToSpeech from "./TextToSpeech"



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
                            Right Angle Technologies: Enterprise-Grade Software and Generative AI Solutions.
                            {/* <span>— Featuring Practical, Ready-to-Use Examples</span> */}
                          </h7>

                          <p className="lead text-white">
                            Architect, build, and scale high-performance digital platforms that drive business transformation. Our full-stack expertise delivers custom web, mobile, and AI-powered applications with measurable ROI.
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
                              className="btn-icon ml-2"
                              color="default"
                              href="tel:+13478155674"
                              style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '1px solid white',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              <span className="btn-inner--icon">
                                <i className="fa fa-phone mr-2" />
                              </span>
                              <span className="nav-link-inner--text ml-1">
                              Schedule Consltation
                              </span>
                            </Button>



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
                    src={require("assets/img/ai.jpg")}
                  />

                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Technology Solutions</h3>
                    <p>

                      Deliver comprehensive digital transformation through:
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
                              Enterprise Mobile Applications
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
                            <h6 className="mb-0">Scalable Web Platforms</h6>
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
                              AI & Machine Learning Integration
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
                          Chief Software Engineer
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

                  <div className="d-flex px-3 mt-5">

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
     
        
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              {/* Process Section */}
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Create a Project Plan</h2>
                  <p className="lead text-white">
                    Develop a detailed project plan outlining the tasks, milestones, timelines, and dependencies.
                    Break down the project into manageable phases or iterations to facilitate execution and tracking.
                  </p>
                </Col>
              </Row>

              {/* Process Steps */}
              <Row className="row-grid justify-content-center mt-5">
                <Col lg="4" md="6" className="mb-5 mb-lg-0 d-flex flex-column align-items-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3"
                    style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ni ni-settings text-primary" style={{ fontSize: '1.75rem' }} />
                  </div>
                  <h5 className="text-white text-center">Discovery</h5>
                  <p className="text-white mt-2 text-center">
                    Comprehensive requirements analysis and solution architecture planning.
                  </p>
                </Col>

                <Col lg="4" md="6" className="mb-5 mb-lg-0 d-flex flex-column align-items-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3"
                    style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ni ni-ruler-pencil text-primary" style={{ fontSize: '1.75rem' }} />
                  </div>
                  <h5 className="text-white text-center">Design</h5>
                  <p className="text-white mt-2 text-center">
                    UX/UI design, technical specifications, and architecture diagrams.
                  </p>
                </Col>

                <Col lg="4" md="6" className="mb-5 mb-lg-0 d-flex flex-column align-items-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3"
                    style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ni ni-atom text-primary" style={{ fontSize: '1.75rem' }} />
                  </div>
                  <h5 className="text-white text-center">Development</h5>
                  <p className="text-white mt-2 text-center">
                    Agile sprints with continuous integration and quality assurance.
                  </p>
                </Col>
              </Row>

              {/* Testimonials Header */}
              <Row className="justify-content-center mt-7">
                <Col lg="10" className="text-center">
                  <h4 className="display-3 text-white">Proven Success Stories</h4>
                  <p className="lead text-white">
                    Here's what our clients achieved through our partnership
                  </p>
                </Col>
              </Row>

              {/* Testimonial Cards - Centered */}
              <Row className="justify-content-center">
                <Col lg="8" className="text-center">
                  <Card className="bg-transparent shadow border-0 my-4">
                    <CardBody>
                      <img
                        alt="Testimonial 1"
                        src={require("assets/img/Review.jpg")}
                        className="img-fluid rounded"
                      />
                    </CardBody>
                  </Card>

                  <Card className="bg-transparent shadow border-0 my-4">
                    <CardBody>
                      <img
                        alt="Testimonial 2"
                        src={require("assets/img/review2.jpg")}
                        className="img-fluid rounded"
                      />
                    </CardBody>
                  </Card>

                  <Card className="bg-transparent shadow border-0 my-4">
                    <CardBody>
                      <img
                        alt="Testimonial 3"
                        src={require("assets/img/review3.jpg")}
                        className="img-fluid rounded"
                      />
                    </CardBody>
                  </Card>
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
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default Landing;
