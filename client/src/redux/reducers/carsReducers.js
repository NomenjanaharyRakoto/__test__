import { types } from '../types'

const initialState = {
    cars: [],
    car: {}
}

const carsReduces = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_CARS:
            return {...state, cars: payload }
        case types.GET_CAR:
            return {...state, car: payload }
        default:
            return state;
    }
}

export default carsReduces