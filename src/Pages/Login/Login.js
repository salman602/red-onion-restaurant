import React from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../images/logo2.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import fbIcon from '../../images/ICON/facebook.png';
import googleIcon from '../../images/ICON/google.png';
import gmailIcon from '../../images/ICON/gmail.png';
import './Login.css';
import { Link, NavLink } from 'react-router-dom';


const Login = () => {
    // const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    // const googleIcon = <FontAwesomeIcon icon={faGoogle} />
    // const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div className="login-section pt-4">
            <div className="d-flex justify-content-center align-items-center">

                <div>
                    <img className="mb-4 ms-4" src={logo} alt="" width="120" height="40" />

                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>

                    <Button className="w-100 mt-3" variant="danger" type="submit">
                        Login
                    </Button>
                    <p className="text-center text-danger mt-1">or sign in using</p>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Link>
                                    <button className="border-0 bg-transparent">
                                        <Image src={googleIcon} rounded width="40" height="40" />
                                    </button>
                                </Link>
                            </Col>
                            <Col xs={6} md={4}>
                                <Link>
                                    <button className="border-0 bg-transparent">
                                        <Image src={fbIcon} rounded width="40" height="40" />
                                    </button>
                                </Link>
                            </Col>
                            <Col xs={6} md={4}>
                                <Link>
                                    <button className="border-0 bg-transparent">
                                        <Image src={gmailIcon} rounded width="40" height="40" />
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                    <p className="text-center text-danger mt-3">Don't have an account? Please Sign up
                        <NavLink
                            className="text-danger text-decoration-none"
                            to="/signup"
                        > <span className="text-decoration-underline">here</span></NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;