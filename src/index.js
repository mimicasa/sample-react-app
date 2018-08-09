import 'babel-polyfill'
import 'whatwg-fetch'

import React from 'react'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from 'containers/App'
import Index from 'containers/Index'

import 'font-awesome/less/font-awesome.less'
import 'less/style.less'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store'

// load data from localstorage
store.dispatch({ type: 'INIT' })

const rootElement = document.getElementById('root')

const history = syncHistoryWithStore(hashHistory, store)
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Index}>
        <IndexRedirect to="app" />
        <Route path="app" component={App}>
          
        </Route>
      </Route>
    </Router>
  </Provider>,
  rootElement,
)
