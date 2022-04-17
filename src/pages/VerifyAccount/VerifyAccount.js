import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../images/login-logo.png';
import '../Login/Login.css'


const VerifyAccount = () => {
    return (
        <div className='login-section'>
            <Container>
                <Row>
                    <Col>
                        <div className='login'>
                            <img src={Logo} alt='logo' className='logo'/>
                            <h2>Please Verify Your Account</h2>
                            <p className='login-text'>A verification link was sent to your email. Please click the link in the email or enter the code below.</p>
                            <div className='input-box m-0'>
                                <input type="email" placeholder='Verification code' />
                            </div>
                            <button type="submit" className='verify-btn' style={{width:'172px'}}>Verify</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default VerifyAccount;