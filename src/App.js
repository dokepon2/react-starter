import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PageNotFound from './pages/PageNotFound'
import TestAntd from './components/TestAntd'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TestAntd} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
