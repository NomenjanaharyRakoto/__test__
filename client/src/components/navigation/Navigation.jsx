import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import { connect } from 'react-redux'
import Layout from '../layouts/Layouts'
import Home from '../../screens/home'
import Login from '../../screens/auth/Login'
import Signup from '../../screens/auth/Signup'
import Item  from '../../screens/home/item'
const Navigation = (props) => {
     const { user: { is_authenticated } } = props
    return (
        <Router>
            <Layout>
                <Route  exact path='/' component={Home}
                
                ></Route>
                <Route path='/car'   component={Item}></Route>
                {!is_authenticated ?
                <div>
                    <Route path='/login' component={Login}></Route>
                        <Route path='/signup' component={Signup}></Route>
                        
                </div>:''
                }
            </Layout>
        </Router>
    )
}



const mapStateToProps = state => ({
    user:state.users
})

export default connect(mapStateToProps,null)( Navigation)

