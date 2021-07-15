import Axios from 'axios'
import { route } from '../../config/api.json'
import { config } from '../../config/data'
import { returnErrors } from './errorAction'
import { USER, IS_AUTHENTICATED, LOGOUT, IS_LOADING, REGISTER_SUCCESS } from '../types'


export const register = (user) => (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true })

    return new Promise((resolve, reject) => {
        Axios.post(`${config.apiUrl}/${route.register}`, user).then(response => {
            const res = response.data
            if (res && !res.error) {
                dispatch({ type: REGISTER_SUCCESS, payload: true })
                resolve(res)
            } else {
                dispatch(returnErrors(res.error, 'REGISTER_FAILED'))
                resolve(res)
            }
        }).catch(err => {
            reject(err)
        })
        dispatch({ type: IS_LOADING, payload: false })
    })
}


export const authetication = (user) => (dispatch) => {
    dispatch({ type: IS_LOADING, payload: true })

    return new Promise((resolve, reject) => {
        Axios.post(`${config.apiUrl}/${route.auth}`, user).then(response => {
            const res = response.data
            if (res && !res.error) {
                dispatch({ type: USER, payload: res })
                dispatch({ type: IS_AUTHENTICATED, payload: true })
                resolve(res)
            } else {
                dispatch(returnErrors(res.error, 'AUTH_FAILED'))
                resolve(res)
            }
        }).catch(err => {
            reject(err)
        })
        dispatch({ type: IS_LOADING, payload: false })
    })
}


export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT })
}