import { hashHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

import reducer from 'reducers'

const enhancers = [
  applyMiddleware(
    thunk,
    routerMiddleware(hashHistory),
  ),
]

if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension())
}

const store = createStore(
  reducer, compose(...enhancers),
)

export default store
