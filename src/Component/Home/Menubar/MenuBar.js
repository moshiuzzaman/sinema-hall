import { Container } from '@material-ui/core';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <Container>
            <Navbar  className="menu-bar m-0 p-0" expand="lg">
                <Link className="logo" to='/'>Sinema Hall</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link  to="/">Home</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default MenuBar;