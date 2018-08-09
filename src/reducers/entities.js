import { handleActions } from 'redux-actions'

import { receiveEntities, setSelectedItem, setSetAlreadyRead } from 'actions/posts'

const reducer = handleActions({

  [receiveEntities]: (state, action) => {
    let payload = action.payload ? action.payload : {}
    const result = { ...payload.entities }
    
    return result
  },
  [setSelectedItem]: (state, action) => {
   return {
     ...state,
     selectedItem: action.payload
    }
  },
  [setSetAlreadyRead]: (state, action) => {
    let result = {...state}

    let postPayload = result.posts[action.payload]
    postPayload.read = true

    result[action.payload] = postPayload
   return result
  }
}, {})


export default reducer
