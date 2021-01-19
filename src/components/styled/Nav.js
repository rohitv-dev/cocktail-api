import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Container = styled(motion.nav)`
  height: 10% ;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  z-index: 10;
`

export const Title = styled(motion.div)`
  color: white;
  font-size: 1.5rem;
`

export const Link = styled(NavLink)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;

  &.active {
    font-weight: 700;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Item = styled(motion.div)`  
  &.active {
    border-bottom: 1px solid yellow;
  }
`