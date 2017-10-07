import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

const HomeApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    </div>
  )
}

const NotFound = () => {
  return (
    <div>
      <center><h1>404 Not Found</h1></center>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeApp} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
