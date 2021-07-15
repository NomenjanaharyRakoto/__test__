import { IS_LOADING } from '../types'
const initialState = {
    loader: false
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                loader: action.payload
            }
        default:
            return state
    }
}

export default loaderReducer