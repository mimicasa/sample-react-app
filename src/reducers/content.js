import { handleActions } from 'redux-actions'

import { setSelectedItem } from 'actions/posts'

const reducer = handleActions({

  [setSelectedItem]: (state, action) => {
   return {
     ...state,
     selectedItem: action.payload
    }
  }
}, {})


export default reducer
