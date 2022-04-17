import React from 'react';
import { Container } from 'react-bootstrap';
import Calender from '../../components/Calender/Calender';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <NavigationBar />
            <div className='dashboard'>
                <Container className='home-container'>
                    <Calender />
                </Container>
            </div>
        </div>
    );
};

export default Home;