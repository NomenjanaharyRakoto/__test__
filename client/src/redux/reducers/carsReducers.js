import { GET_CAR, GET_CARS } from '../types'

const initialState = {
    cars: [],
    car: {}
}

const carsReduces = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CARS:
            return {...state, cars: payload }
        case GET_CAR:
            return {...state, car: payload }
        default:
            return state;
    }
}

export default carsReduces