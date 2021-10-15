import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../../../images/logo2.png';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="96"
                            height="32"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/cart" className="fw-normal pt-2 text-black">{cartIcon}</NavLink>
                            <Link to="/login">
                                <Button variant="link" className="text-decoration-none ms-3 text-black fw-normal">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="outline-danger" className="ms-3 px-4 rounded-pill">Sign up</Button>
                            </Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;