import React from 'react';
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
  DropdownItem } from 'reactstrap';
import LoginForm from './LoginForm';
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          isOpen: false
        };
    this.toggle = this.toggle.bind(this);
    
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 
  render() {

    return (
        <header className="sticky-top navbar-light bg-light">
           <Navbar color="faded" light expand="md" style={{backgroundColor: '#DFDDDD',marginBottom:'10px'}}>
            <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Knowledge sources
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/vasocaity" target="_blank">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{padding:'0px'}}> <LoginForm/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </header>
    );
  }
}