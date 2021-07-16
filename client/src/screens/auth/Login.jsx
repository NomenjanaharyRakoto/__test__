import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Alert, Spinner} from 'react-bootstrap'
import { authetication } from '../../redux/actions/userAction'
import { cleanErrors } from '../../redux/actions/errorAction'
import { useHistory } from "react-router-dom"
import { submit } from '../../services/technique/submit'
const Login = (props) => {
    const { authetication, loader , error:{message}, cleanErrors, success_register} = props
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const history = useHistory()
    console.log(props);

    const authAction = () => {
        submit(['email', 'password'], user, setError)
        if (!error) {
            authetication(user).then(res => {
                if (!res.error) {
                   history.push('/')
               }
           })
        }
    }
    const handleValueChange = (event, key) => {
        cleanErrors()
        setError('')
        setUser({...user, [key]:event.target.value})
    }
    

    return (
        <div className="auth-wrapper">
            <div className="auth-inner" style={{marginTop:10}}>
               {success_register && <h3>Thank you for registering log in now</h3>}
                {message.message  || error?
                    <Alert variant="danger">
                    {error ? error  : message.message}
                </Alert>:null
                }
             <form>
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

                <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        onChange={(e)=>{handleValueChange(e,'rememberMe')}}
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

                    <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={() => { authAction() }}
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
    error: state.errors,
    success_register:state.users.register
})

export default connect(mapStateToProps, {authetication, cleanErrors})(Login)