import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useGetByID } from '../services/customHooks'
import * as Drink from '../components/styled/Details'

const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  }
}

const dataVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {      
      delay: 1
    }
  }
}

const tabVariant = {
  hidden: {
    x: "100vw"
  },
  visible: {
    x: 0,
    transition: {
      delay: 1.5
    }
  }
}

function Details(props) {
  const [data, loading] = useGetByID(props.match.params.id)
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
    <Drink.Container variants={containerVariant} initial="hidden" animate="visible">
      <Drink.ImageContainer variants={dataVariant}>
        <Drink.Image src={ strDrinkThumb } alt={ strDrink } />
      </Drink.ImageContainer>
      <Drink.Data variants={dataVariant}>
        <Drink.Name>{ strDrink }</Drink.Name>
        <Drink.Recipe>
          <Drink.RecipeTitle>Recipe</Drink.RecipeTitle>
          { recipe.map((measure, index) => 
            <Drink.Measure> { ingredients[index] } - { measure }</Drink.Measure>
          ) }
        <Drink.Instructions>
          <Drink.InstructionTitle>Instructions</Drink.InstructionTitle>
          { strInstructions }
        </Drink.Instructions>
        </Drink.Recipe>
        <Drink.Ingredients>
          { ingredients.map((ingredient, index) => 
            <Drink.IngredientTab 
              variants={tabVariant} 
              key={ ingredient }>{ ingredient }</Drink.IngredientTab>  
          ) }
        </Drink.Ingredients>
      </Drink.Data>
    </Drink.Container>
  )
}

export default Details
