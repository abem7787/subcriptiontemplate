import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  NavItem,
  Nav,
  NavbarBrand,
  Navbar,
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({ collapseClasses: "collapsing-out" });
  };

  onExited = () => {
    this.setState({ collapseClasses: "" });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                Right Angle Tech
              </NavbarBrand>

              {/* Toggler removed for simplicity, you can re-enable it if needed */}

              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">Right Angle</Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon mr-2"
                      color="default"
                      href="tel:+13478155674"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-phone mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Call</span>
                    </Button>

                    <Button
                      className="btn-neutral btn-icon mr-2"
                      color="default"
                      href="mailto:rightangletechbusinesssolutions@gmail.com"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-envelope mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Email</span>
                    </Button>

                    <Button
                      className="btn-neutral btn-icon"
                      color="primary"
                      tag={Link}
                      to="/blog"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-book mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Blog</span>
                    </Button>
                             <Button
                      className="btn-neutral btn-icon"
                      color="primary"
                      tag={Link}
                      to="/"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-home mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Home</span>
                    </Button>

                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
