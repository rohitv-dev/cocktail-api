import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Input = styled.input`
  padding: 0.5rem 1rem;
`

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`