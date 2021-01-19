import React from 'react'
import * as Nav from './styled/Nav'

function Navbar() {
  return (
      <Nav.Container
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <Nav.Title initial={{ }} animate={{ }}>Cocktail DB</Nav.Title>
        <Nav.Menu>
          <Nav.Link exact to="/" activeClassName="active">
            <Nav.Item whileHover={{ scale: 1.1, originX: 0 }} >Home</Nav.Item>
          </Nav.Link>
          <Nav.Link exact to="/random" activeClassName="active">
            <Nav.Item whileHover={{ scale: 1.1, originX: 0 }} >Random</Nav.Item>
          </Nav.Link>
        </Nav.Menu>
      </Nav.Container> 
  )
}

export default Navbar
