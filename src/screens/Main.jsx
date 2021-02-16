import React, { useState } from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'
import * as Card from '../components/styled/Card'
import { CardContainer } from '../components/styled/Main'
import { Link } from 'react-router-dom'

const MainPage = styled.div`
  width: 100%;
`

function Main({ data, loading, fLoading }) {
  if (fLoading && loading) return <Loading />

  return (
    <MainPage>
      <CardContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {data.map((drink) => 
          <Link to={{ pathname: `details/${drink.idDrink}` }} style={{textDecoration: 'none', color: 'white'}}>
            <Card.Card 
              key={drink.strDrink}
            >
              <Card.Title>{ drink.strDrink }</Card.Title>
              <Card.Image src={drink.strDrinkThumb} alt={drink.strDrink} />
            </Card.Card>
          </Link>
        )}
      </CardContainer>
    </MainPage>
  )
}

export default Main
