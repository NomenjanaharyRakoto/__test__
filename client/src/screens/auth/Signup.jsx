import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {Alert, Spinner} from 'react-bootstrap'
import { register } from '../../redux/actions/userAction'
import { cleanErrors } from '../../redux/actions/errorAction'
import { useHistory } from "react-router-dom"
import { submit } from '../../services/technique/submit'
const Login = (props) => {
    const { register, loader , error:{message}, cleanErrors} = props
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const history = useHistory()

    const registerAction = () => {
        submit(['username', 'email', 'password'], user, setError)
        if (!error) {
            register(user).then(res=> {
                if (res && !res.error) {
                    history.push('/login')
                }
            })
        }
    }
    const handleValueChange = (event, key) => {
        cleanErrors()
        setError('')
        setUser({...user, [key]:event.target.value})
    }

    useEffect(() => {
        cleanErrors()
    }, [cleanErrors])

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                {message.message || error ?
                    <Alert variant="danger">
                    {error ? error : message.message}
                </Alert>:null
                }
                <form>
                     <div className="form-group">
                          <label>Username</label>
                            <input
                                type="username"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e)=>{handleValueChange(e,'username')}}
                            />  
                    </div>
                <div className="form-group">
                    <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e)=>{handleValueChange(e,'email')}}
                            />
                </div>

                <div className="form-group">
                    <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e)=>{handleValueChange(e,'password')}}
                            />
                </div>
                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => { registerAction() }}
                        disabled={loader}
                    >{loader ?
                        <Spinner animation="border" role="status"/>
                        :'Login'
                    }
                    </button>
            </form>
        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loader: state.loader.loader,
    error:state.errors
})

export default connect(mapStateToProps, {register, cleanErrors})(Login)