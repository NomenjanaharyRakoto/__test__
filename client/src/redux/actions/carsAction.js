import { IS_LOADING, GET_CARS, GET_CAR, GET_COMMENTS } from '../types'
import { returnErrors } from './errorAction'
import Axios from 'axios'
import { route } from '../../config/api.json'
import { config } from '../../config/data'

// export const getCars = (cars) => {
//     return {
//         type: types.GET_CARS,
//         payload: cars
//     }
// }
// export const getCar = (car) => {
//     return {
//         type: types.GET_CAR,
//         payload: car
//     }
// }

export const loadCars = () => (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true })
    return new Promise((resolve, reject) => {
        Axios.get(`${config.apiUrl}/${route.cars}`).then(response => {
            const data = response.data
            if (data && !data.error) {

                dispatch({ type: GET_CARS, payload: data })
                resolve(data)
            } else {
                dispatch(returnErrors(data.error, 'failed'))
                resolve(data)
            }
        }).catch(err => {
            console.log('====================================');
            console.log(err, 'error');
            console.log('====================================');
            reject(err)
        })
        dispatch({ type: IS_LOADING, payload: false })
    })
}

export const loadCar = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        if (data) {
            dispatch({ type: GET_CAR, payload: data })
            resolve(data)
        } else {
            dispatch(returnErrors(`can't find any data`, 'failed'))
            resolve('failed')
        }
    })
}
export const loadCommentsByCar = (car) => (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true })
    return new Promise((resolve, reject) => {
        Axios.get(`${config.apiUrl}/${route.comments}/car/${car}`).then(response => {
            const data = response.data
            if (data && !data.error) {
                dispatch({ type: GET_COMMENTS, payload: data })
                resolve(data)
            } else {
                dispatch(returnErrors(data.error, 'FAILED_COMMENTS'))
                resolve(data)
            }
        }).catch(err => {
            reject(err)
        })
        dispatch({ type: IS_LOADING, payload: false })
    })
}