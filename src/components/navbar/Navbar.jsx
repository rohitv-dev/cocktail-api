import React from 'react'
import { Nav, NavMenu, NavLink, NavTitle, NavItem } from './NavElement'

function Navbar() {
  return (
      <Nav>
        <NavTitle>Cocktail DB</NavTitle>
        <NavMenu>
          <NavLink to="/" activeStyle>
            <NavItem>Home</NavItem>
          </NavLink>
          <NavLink to="/random" activeStyle>
            <NavItem>Random</NavItem>
          </NavLink>
        </NavMenu>
      </Nav> 
  )
}

export default Navbar
