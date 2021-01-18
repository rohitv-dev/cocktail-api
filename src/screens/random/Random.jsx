import React, { useState, useEffect } from 'react'
import Loading from '../../components/loading/Loading'
import { useGetRandom } from '../../services/customHooks'
import { 
  Drink, DrinkImage, DrinkName, 
  DrinkIngredients, IngredientTab, DrinkData, 
  DrinkRecipe, Measure, Instructions,
  InstructionTitle, RecipeTitle
} from './RandomElements'

function Random() {
  const [data, loading] = useGetRandom()
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState([])
  let { strDrink, strDrinkThumb, strInstructions } = data

  useEffect(() => {
    let [temp, temp2] = [[], []]
    if (!loading) {
      for (let i = 1; i <= 12; i++) {
        let ing = `strIngredient${i}`
        let measure = `strMeasure${i}`
        if (data[ing] !== null) {
          temp = [...temp, data[ing]]
          temp2 = [...temp2, data[measure]]
        }
      }
    }
    setIngredients(temp)
    setRecipe(temp2)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  if (loading) return <Loading />

  return (
    <Drink>
      <DrinkImage src={ strDrinkThumb } alt={ strDrink } />
      <DrinkData>
        <DrinkName>{ strDrink }</DrinkName>
        <DrinkRecipe>
          <RecipeTitle>Recipe</RecipeTitle>
          { recipe.map((measure, index) => 
            <Measure> { ingredients[index] } - { measure }</Measure>
          ) }
        <Instructions>
          <InstructionTitle>Instructions</InstructionTitle>
          { strInstructions }
        </Instructions>
        </DrinkRecipe>
        <DrinkIngredients>
          { ingredients.map((ingredient) => 
            <IngredientTab key={ ingredient }>{ ingredient }</IngredientTab>  
          ) }
        </DrinkIngredients>
      </DrinkData>
    </Drink>
  )
}

export default Random
