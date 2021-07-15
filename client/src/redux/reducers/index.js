import { combineReducers } from 'redux'
import carReducers from './carsReducers'
import loaderReducer from './loaderReducer'
const rootReducers = combineReducers({
    cars: carReducers,
    loader: loaderReducer
})

export default rootReducers