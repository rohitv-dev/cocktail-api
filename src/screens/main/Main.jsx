import React, { useState } from 'react'
import styled from 'styled-components'
import Loading from '../../components/loading/Loading'
import { Input, CardContainer, Card, CardName, CardImage } from './MainElements'
import { useGetDrink } from '../../services/customHooks'

const MainPage = styled.div`
  width: 100%;
`

function Main() {
  const [name, setName] = useState('')
  const [filters, setFilters] = useState({i: ['Vodka'], a: [], c: []})
  const [fData, fLoading, data, loading] = useGetDrink(filters, name)

  if (fLoading && loading) return <Loading />

  return (
    <MainPage>
      <Input 
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <CardContainer>
        {data.map((drink) => 
          <Card key={drink.strDrink}>
            <CardImage src={drink.strDrinkThumb} alt={drink.strDrink}></CardImage>
            <CardName>{ drink.strDrink }</CardName>
          </Card>
        )}
      </CardContainer>
    </MainPage>
  )
}

export default Main
