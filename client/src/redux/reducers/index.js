import { combineReducers } from 'redux'
import carReducers from './carsReducers'
const rootReducers = combineReducers({
    cars: carReducers
})

export default rootReducers