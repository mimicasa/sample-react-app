import { createAction } from 'redux-actions'

import * as api from 'api'

export const getPosts = () => async (dispatch) => {
    let posts = await api.getPosts()
    const result = await dispatch(receiveEntities(posts))
    return result
}

export const setSelectedItem = createAction('SET_SELECTED_ITEM')
export const receiveEntities = createAction('RECEIVE_ENTITIES')
export const setSetAlreadyRead = createAction('SET_ALREADY_READ')