import { USER, IS_AUTHENTICATED, LOGOUT, REGISTER_SUCCESS } from '../types'

const initialState = {
    user: {},
    token: localStorage.getItem('token'),
    is_authenticated: false,
    register: false
}

const userReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER:
            return {...state, user: payload.user, token: payload.token }
        case IS_AUTHENTICATED:
            return {...state, is_authenticated: payload }
        case LOGOUT:
            return {...state, user: {}, token: null, is_authenticated: false, register: false }
        case REGISTER_SUCCESS:
            return {...state, register: payload }
        default:
            return state;
    }
}

export default userReducers