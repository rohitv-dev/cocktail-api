import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  height: 100%;
  margin: 2rem;
  color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const Data = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 1rem;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin: 1rem 0 0 1rem;
  }
`

export const ImageContainer = styled(motion.div)`
  height: 70vh;
  margin-right: 1rem;
  border: 1px solid white;

  @media screen and (max-width: 768px) {
    height: 40vh;
    margin: 0 auto 0 auto;
  }
`

export const Image = styled.img`
  max-height: 90%;
  margin: 1rem;
`

export const Name = styled.div`
  font-size: 1.5rem;
  margin-left: -1rem;
  font-weight: 600;
  color: white;
`

export const Recipe = styled.ul`
  list-style: none;
`

export const RecipeTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`

export const Measure = styled.li`

`

export const Instructions = styled.div`
  margin: 2rem 0;
`

export const InstructionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const IngredientTab = styled(motion.div)`
  display: inline;
  background-color: white;
  padding: 0.1rem 0.5rem;
  text-align: center;
  color: #7d0690;
  font-weight: 600;
  border-radius: 0.1rem;
  margin: 0.5rem;
  width: auto;
`
