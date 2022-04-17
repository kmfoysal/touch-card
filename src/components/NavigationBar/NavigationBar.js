import React from 'react';
import Plus from '../../icons/add.png'
import Question from '../../icons/minus-cirlce.png'
import './NavigationBar.css'
import Bell from '../../icons/Icon.svg'
import ProfileImg from '../../icons/profile-img.png'
import ArrowDown from '../../icons/arrow-down.svg'

const NavigationBar = () => {
    return (
        <nav className='navigation-bar'>
            <button><span><img src={Plus} alt="icon" /></span> New Campaign</button>
            <ul>
                <li>
                    <img src={Question} alt="icon" />
                </li>
                <li><img src={Bell} alt="icon" /></li>
                <li>
                    <div className='profile'>
                        <img src={ProfileImg} alt="img" />
                        <img className='ms-2 rounded-circle' src={ArrowDown} alt="icon" />
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;