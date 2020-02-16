import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'

import Main from './pages/Main'

import sfe from './sfe'

const App = props => {
  return (
    <div {...sfe.__bodyStyle}>
      <Router>
        <Layout />

        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
