import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SideMenu = styled(motion.div)`
  position: absolute;
  z-index: 100;
  width: 30%;
  height: 100%;
  background: linear-gradient(52deg, rgba(125,6,144,1) 0%, rgba(187,8,199,1) 100%); 
`

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
`