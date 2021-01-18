import styled from 'styled-components'

export const Drink = styled.div`
  display: flex;
  height: 100%;
  margin: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const DrinkData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: space-evenly;
`

export const DrinkImage = styled.img`
  height: 70vh;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`

export const DrinkName = styled.div`
  font-size: 1.5rem;
  margin-left: -1rem;
  font-weight: 600;
`

export const DrinkRecipe = styled.ul`
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

export const DrinkIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const IngredientTab = styled.div`
  display: inline;
  background-color: green;
  padding: 0.1rem 0.5rem;
  text-align: center;
  color: white;
  font-weight: 600;
  border-radius: 0.1rem;
  margin: 0.5rem;
  width: auto;
`
