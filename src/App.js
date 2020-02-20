import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Content from './components/Content'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import sfe from './sfe'

const App = props => {
  return (
    <div {...sfe.__bodyStyle}>
      <Router>
        <Header />

        <Switch>
          <Route path='/docs/:page+'>
            <Content />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
