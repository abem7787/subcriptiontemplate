import React from "react";
import { Link } from "react-router-dom";



// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
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
            <img class="w-20"   style={{ height: '150px' }}  
                  alt="..."
                  src={require("assets/img/brand/rightangletech.png")}
                />
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            
                
              </NavbarBrand>
              {/* <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button> */}
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
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
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
  className="btn-neutral btn-icon"
  color="default"
  href="tel:+13478155674" // Link to call your phone number
>
  <span className="btn-inner--icon">
    <i className="fa fa-phone mr-2" />
  </span>
  <span className="nav-link-inner--text ml-1">
    Call
  </span>
</Button>

<Button
  className="btn-neutral btn-icon"
  color="default"
  href="mailto:rightangletechbusinesssolutions@gmail.com" // Link to open the email client
>
  <span className="btn-inner--icon">
    <i className="fa fa-envelope mr-2" />
  </span>
  <span className="nav-link-inner--text ml-1">
    Email
  </span>
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
