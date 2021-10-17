import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
// import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-dark" to="/checkout">
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/signin">Sign up
                        </Nav.Link>
                        <Navbar.Text className="text-dark">
                            <a href="#login" className="text-dark">{user?.displayName}</a>
                        </Navbar.Text>
                        {
                            (!user?.email) ?
                            <Nav.Link as={HashLink} className="text-dark" to="/login">
                                Login
                            </Nav.Link> 
                            :
                            <button onClick={logOut} variant="light">Logout</button>
                        }
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;