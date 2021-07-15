import Axios from 'axios'
import { route } from '../../config/api.json'
import { config } from '../../config/data'
import { returnErrors } from './errorAction'
import { SET_COMMENTS, IS_LOADING } from '../types'

export const createComment = (comment) => (dispatch, getState) => {

    const token = getState().users.token
    const user = getState().users.user
    let comments = getState().comments.comments
    const configs = {
        headers: {
            "Content-type": "Application/json"
        }
    }

    if (token) {
        configs.headers['Authorization'] = token
    }



    return new Promise((resolve, reject) => {
        dispatch({ type: IS_LOADING, payload: true })
        Axios.post(`${config.apiUrl}/${route.comments}`, comment, configs).then(response => {
            let data = response.data
            if (data && !data.error) {
                Object.keys(comments)
                data = {...data, owner: user }
                comments = [...comments, data]
                dispatch({ type: SET_COMMENTS, payload: comments })
                resolve(data)
            } else {
                dispatch(returnErrors(data.error, 'COMMENT_FAILED'))
                resolve(data.error)
            }
        }).catch(err => {
            reject(err)
        })
        dispatch({ type: IS_LOADING, payload: false })

    })

}