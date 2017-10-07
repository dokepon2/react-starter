import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import 'antd/dist/antd.css'
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
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <LocaleProvider locale={enUS}>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </LocaleProvider>,
      rootEl
    )
  })
}

registerServiceWorker()
