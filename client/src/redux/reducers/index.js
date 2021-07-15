import { combineReducers } from 'redux'
import carReducers from './carsReducers'
import loaderReducer from './loaderReducer'
import commentsReducers from './commentsReducers'
import errorReducers from './errorReducers'
import userReducers from './userReducers'

const rootReducers = combineReducers({
    errors: errorReducers,
    cars: carReducers,
    loader: loaderReducer,
    comments: commentsReducers,
    users: userReducers
})

export default rootReducers