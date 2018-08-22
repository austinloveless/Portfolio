import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import BackgroundVideo from "./BackgroundVideo";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand>
            {" "}
            <NavLink tag={Link} to="/">
              <img class="smaller-logo" src="/img/al.png" />
            </NavLink>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  <p class="text-color">About</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects">
                  <p class="cursor text-color">Portfolio</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/austinloveless">
                  <p class="text-color">Github</p>
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <p class="text-color">
                    More<i class="fa fa-angle-down" />
                  </p>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink tag={Link} to="/about#education"><p class="text-color">Education</p>
          </NavLink>                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink tag={Link} to="/projects"><p class="cursor text-color">Passions</p>
                      </NavLink>

                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink tag={Link} to="/about"><p class="cursor text-color">Contact</p>
                      </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
