import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavTitle = styled.div`
  color: white;
  font-size: 1.5rem;
`

export const Nav = styled.nav`
  background: #000;
  height: 10% ;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    color: yellow;
    border-bottom: 1px solid white;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.div`  
  &.active {
    border-bottom: 1px solid yellow;
  }
`