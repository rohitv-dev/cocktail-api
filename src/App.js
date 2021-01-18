import React from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './screens/main/Main'
import Random from './screens/random/Random'
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
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
