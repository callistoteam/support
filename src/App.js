import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Content from './components/Content'
import Header from './components/Header'

import sfe from './sfe'

const App = props => {
  return (
    <div {...sfe.__bodyStyle}>
      <Router>
        <Header />

        <Switch>
          <Route path='/:page+'>
            <Content />
          </Route>
          <Route path='/'>
            <Content />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
