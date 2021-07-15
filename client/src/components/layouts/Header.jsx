import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, } from 'react-bootstrap'
import { connect } from 'react-redux'
import {logout} from '../../redux/actions/userAction'
const Header = (props) => {
    const { user: { is_authenticated, user }, logout } = props
    const actionLogout = () => {
        logout()
    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <Nav className="mr-5">
                    <Link className="nav" to="/">Home</Link>
                    {is_authenticated ?
                        <div className="nav-item">
                              <Link className="nav"to="#" >{user.username}</Link>
                                <Link  className="nav" to="#" onClick={()=>{actionLogout()}}>logout</Link>
                        </div>
                        :
                        <div className="nav-item">
                              <Link className="nav"to="/login">Login</Link>
                             <Link  className="nav" to="/signup">Signup</Link>   
                        </div>
                }
                </Nav>
            </Navbar>
        </>
    );
}
const mapStateToProps = state => ({
    user:state.users
})
export default connect(mapStateToProps, {logout})(Header)
