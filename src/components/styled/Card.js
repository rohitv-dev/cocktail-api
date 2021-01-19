import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  display: block;
  border: 0.5px solid white;
  margin: 1rem;
  align-items: center;
  justifyContent: space-evenly;
  width: 200px;
  height: 250px;
  box-shadow: 0 0 5px white;
  cursor: pointer;
  border-radius: 0.1rem;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Title = styled.div`
  padding: 0.5rem 0 0 0;
  font-size: 1rem;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 700;
`