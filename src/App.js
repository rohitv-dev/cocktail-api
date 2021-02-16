import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './screens/Main'
import Random from './screens/Random'
import Details from './screens/Details'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import { useGetDrink } from './services/customHooks'

const Divider = styled.div`
  border-top: 1px solid white;
  margin: 0 1rem;
`

function App() {
  const [name, setName] = useState('')
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useState({i: ['Vodka'], c: [], a: []})
  const [fData, fLoading, data, loading] = useGetDrink(filters, name)

  return (
    <>
      <BrowserRouter>
        <Navbar open={open} setOpen={setOpen} />
        <Divider />
        <Switch>
          <Route exact path="/">
            <Main 
              fData={fData} data={data} 
              fLoading={fLoading} loading={loading} 
            />
          </Route>
          <Route exact path="/random" component={Random} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
