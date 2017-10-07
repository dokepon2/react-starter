import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducers';

const store = createStore(reducer,
  {},
  compose(
    process.env.NODE_ENV !== 'production'
      ? window.devToolsExtension && window.devToolsExtension()
      : f => f
  ))

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    )
  })
}

registerServiceWorker()
