import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Layout from '../layouts/Layouts'
import Home from '../../screens/home'
import Login from '../../screens/auth/Login'
import Signup from '../../screens/auth/Signup'
const Navigation = () => {
    return (
        <Router>
            <Layout>
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/signup' component={Signup}></Route>
            </Layout>
        </Router>
    )
}

export default Navigation

