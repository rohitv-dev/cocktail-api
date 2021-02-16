import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Collapsible = styled(motion.div)`

`

export const Title = styled(motion.div)`
  display: flex;
  margin-left: 1rem;
  width: 100%;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`

export const Content = styled(motion.div)`
  color: white;
  margin-left: 1.5rem;
  min-height: 0;
`