import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import catLogo from '../assets/cat-logo.png'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div className="header-main">
      <Navbar color="faded" light>
        <NavLink to="/">
          <img src={ catLogo } alt="Cat Tinder logo" className="cat-logo" />
        </NavLink>
        <NavbarToggler onClick={ toggleNavbar } className="mr-2" />
        <Collapse isOpen={ !collapsed } navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/catindex">Meet the Cats</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/catnew">Add a Cat</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default Header
