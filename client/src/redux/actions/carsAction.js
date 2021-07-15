import { types } from '../types'
export const getCars = (cars) => {
    return {
        type: types.GET_CARS,
        payload: cars
    }
}
export const getCar = (car) => {
    return {
        type: types.GET_CAR,
        payload: car
    }
}