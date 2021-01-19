import React from 'react'
import Navbar from './components/Navbar'
import Main from './screens/Main'
import Random from './screens/Random'
import Details from './screens/Details'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/random" component={Random} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
