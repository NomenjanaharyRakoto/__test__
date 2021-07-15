import { GET_COMMENTS, SET_COMMENTS } from '../types'

const initialState = {
    comments: [],

}

const commentsReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COMMENTS:
        case SET_COMMENTS:
            return {...state, comments: payload }

        default:
            return state;
    }
}

export default commentsReducers