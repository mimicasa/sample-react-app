import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import entities from './entities'
import content from './content'

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  entities,
  content,
})

const rootReducer = (state, action) => {
  const resultState = state
  return reducers(resultState, action)
}

export default rootReducer
