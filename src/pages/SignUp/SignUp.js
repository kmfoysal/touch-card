import React, { useState } from 'react';
import Logo from '../../images/login-logo.png'
import Email from '../../icons/email.png'
import Lock from '../../icons/lock.png'
import Eye from '../../icons/eye-slash.png'
import Google from '../../icons/google.png'
import Facebook from '../../icons/Facebook.png'
import EyeOpen from '../../icons/eye.png'
import { Col, Container, Row } from 'react-bootstrap';
import '../Login/Login.css'
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [type, setType]= useState('password');
    const [icon, setIcon]= useState(Eye);

    const handleToggle=()=>{    
        if(type==='password'){
          setIcon(EyeOpen);      
          setType('text');
        }
        else{
          setIcon(Eye);     
          setType('password');
        }
      }

    return (
        <div className='login-section'>
            <Container>
                <Row>
                    <Col>
                        <div className='login'>
                            <img src={Logo} alt='logo' className='logo'/>
                            <h2>Create an Account</h2>
                            <p className='login-text'>Create an account to continue.</p>
                            <div className='input-box'>
                                <img src={Email} alt="icon" />
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className='input-box'>
                                <img src={Lock} alt="icon" />
                                <input type={type} placeholder='Password' />
                                <img src={icon} alt="icon" onClick={handleToggle} />
                            </div>
                            <div className='input-box'>
                                <img src={Lock} alt="icon" />
                                <input type={type} placeholder='Re-Type Password' />
                                <img src={icon} alt="icon" onClick={handleToggle} />
                            </div>
                            <div className='accecpt-box'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                    <label class="form-check-label" for="flexCheckChecked">
                                    By singing up, I agree to all statements in <a href='#'>Terms of Service & Privacy.</a>
                                    </label>
                                </div>
                            </div>
                            <button type="submit">Sign In</button>
                            <div className='divider'>
                                <span></span>
                                <p>Or</p>
                                <span></span>
                            </div>
                            <a href="#" className='google-btn'>
                            <img src={Google} alt="icon" />
                            Sign In with Google
                            </a>
                            <a href="#" className='facebook-btn'>
                            <img src={Facebook} alt="icon" />
                            Sign In with Facebook
                            </a>
                            <p className='toggole-text'>Already have an account? <Link to='/login'>LogIn</Link> </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;