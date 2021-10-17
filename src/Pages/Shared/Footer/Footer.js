import React from 'react';
import { Nav } from 'react-bootstrap';
import footerlogo from '../../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="footer-area text-white pt-5">
                <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="footer-logo">
                            <img src={footerlogo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="footer-menu-container">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About Online food</Nav.Link>
                            <Nav.Link eventKey="link-1">Read our blog</Nav.Link>
                            <Nav.Link eventKey="link-2">Sign up to deliver</Nav.Link>
                            <Nav.Link eventKey="link-3">Add your restaurant</Nav.Link>
                        </Nav>
                    </div>
                    </div>
                    <div className="col-md-3">
                        <Nav defaultActiveKey="/home" className="flex-column justify-content-end">
                            <Nav.Link href="/home">Get Help</Nav.Link>
                            <Nav.Link eventKey="link-1">Read FAQs</Nav.Link>
                            <Nav.Link eventKey="link-2">View all cities</Nav.Link>
                            <Nav.Link eventKey="link-3">Restaurants near me</Nav.Link>
                        </Nav>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col pt-2">
                    <p className="text-muted">
                        Copyright &copy;2021 Online food All rights reserved.
                    </p>
                    </div>
                    <div className="col">
                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                            <Nav.Link href="/home">Privacy & Policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-1">Terms of Use</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-2">Pricing</Nav.Link>
                            </Nav.Item>
                        </Nav>                                          
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Footer;