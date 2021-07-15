import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar,Nav, } from 'react-bootstrap'
const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Nav className="mr-5">
                    <Link className="nav" to="/">Home</Link>
                    <Link className="nav"to="/login">Login</Link>
                    <Link  className="nav" to="/signup">Signup</Link>
                </Nav>
            </Navbar>
        </>
    );
}
export default Header
