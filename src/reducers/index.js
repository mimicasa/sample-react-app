import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import entities from './entities'

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  entities,
})

const rootReducer = (state, action) => {
  const resultState = state
  return reducers(resultState, action)
}

export default rootReducer
