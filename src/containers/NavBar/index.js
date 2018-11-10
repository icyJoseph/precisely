import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { toggleState } from "../../utils";
import { PRECISELY, CUSTOMERS, CONTRACTS } from "../../constants";

// Classic NavBar from BootStrap
// It is used in the routes and therefore has access to match, history and location
// renders the brand and two navigation links
export class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = toggleState.bind(this, "isOpen");

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="light" light expand="md">
        <NavLink to="/" className="navbar-brand">
          {PRECISELY}
        </NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/contracts" className="nav-link">
                {CONTRACTS}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/customers" className="nav-link">
                {CUSTOMERS}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
