import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../images/logo2.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section text-white py-5">
            <Container>
                <Row>
                    <Col>
                        <img src={logo} alt="" width='96' height="28" />
                    </Col>
                    <Col md="auto">
                        <p>
                            <NavLink
                                style={{ fontSize: '0.9rem' }}
                                className="text-decoration-none text-white"
                                to="/onlinefoods">
                                About Online Foods
                            </NavLink>
                        </p>
                        <p>
                            <NavLink style={{ fontSize: '0.9rem' }} className="text-decoration-none text-white"
                                to="/blogs">
                                Read Our Blogs
                            </NavLink>
                        </p>
                        <p>
                            <NavLink style={{ fontSize: '0.9rem' }} className="text-decoration-none text-white"
                                to="/signup">
                                Sign Up to Deliver
                            </NavLink>
                        </p>
                        <p>
                            <NavLink style={{ fontSize: '0.9rem' }} className="text-decoration-none text-white"
                                to="/addrestaurant">
                                Add Your Restaurant
                            </NavLink>
                        </p>
                    </Col>
                    <Col xs md lg="1"></Col>
                    <Col xs md lg="1"></Col>
                    <Col xs lg="2">
                        <p>
                            <NavLink style={{ fontSize: '0.9rem' }} className="text-decoration-none text-white"
                                to="/help">
                                Get Help
                            </NavLink>
                        </p>
                        <p>
                            <NavLink style={{ fontSize: '0.9rem' }} className="text-decoration-none text-white"
                                to="/faq">
                                Read FAQ
                            </NavLink>
                        </p>
                        <p>
                            <NavLink style={{ fontSize: '0.9rem' }} className="text-decoration-none text-white"
                                to="/allcities">
                                View all cities
                            </NavLink>
                        </p>
                        <p>
                            <NavLink style={{ fontSize: '0.9rem' }} className="text-decoration-none text-white"
                                to="/nearrestaurant">
                                Restaurants Near me
                            </NavLink>
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm md lg="7">
                        <span>Copyright &copy; 2022 Red onion foods</span>
                    </Col>
                    <Col md="2">
                        <span>Privacy policy</span>
                    </Col>
                    <Col md="2">
                        <span>Terms of use</span>
                    </Col>
                    <Col md="1">
                        <span>Pricing</span>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Footer;