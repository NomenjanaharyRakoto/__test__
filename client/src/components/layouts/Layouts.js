import React from 'react';
import { Container } from 'react-bootstrap'
import Header from '../layouts/Header'
const Layout = ({ children }) => {
    return (
        <>
            <Container fluid>
                <Header />
                <div className="container-fluid">
                <main>{children}</main>
                </div>
            </Container>
        </>
    )
}

export default Layout;

