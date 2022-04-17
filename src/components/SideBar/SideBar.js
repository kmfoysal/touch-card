import { motion } from "framer-motion";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Plus from '../../icons/add.png';
import RightArrow from '../../icons/arrow-right.png';
import Chart from '../../icons/chart.svg';
import Logo from '../../icons/dashboard-logo.png';
import Gallery from '../../icons/gallery.svg';
import Graph from '../../icons/graph.png';
import Humbarger from '../../icons/humbargar-icon.png';
import Mike from '../../icons/Megaphone.svg';
import User from '../../icons/profile-2user.svg';
import Settings from '../../icons/setting-2.png';
import './SideBar.css';




const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: Graph,
    },
    {
        path: "/campaigns",
        name: "Campaigns",
        icon: Mike,
        subRoutes: [
          {
            path: "/campaigns/newCampaign",
            name: "New Campaign ",
          },
          {
            path: "/campaigns/myCampaigns",
            name: "My Campaigns",
          },
        ],
      },
    {
      path: "/contacts",
      name: "Contacts",
      icon: User,
    },
    {
      path: "/designs",
      name: "Designs",
      icon: Gallery,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: Chart,
    },
  ];

const SideBar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const showAnimation = {
      hidden: {
        width: 0,
        opacity: 0,
        transition: {
          duration: 0.9,
        },
      },
      show: {
        opacity: 1,
        width: "auto",
        transition: {
          duration: 0.5,
        },
      },
    };

    return (
        <div className="side-bar-container">
           <motion.div 
                    animate={{width: isOpen ? "240px" : "75px",
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      damping: 12,
                    },
                    }} 
                    className='side-bar'>
                <div className='humbarger-panel'>
                    {isOpen && <motion.div variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden">
                                    <img src={Logo} alt='logo'/>
                              </motion.div>}
                    <img src={Humbarger} alt='logo' onClick={toggle}/>
                </div>
                <hr />
                <div className="side-bar-link">
                    <div className="top-link">
                        {routes.map((route)=>(
                            <NavLink to={route.path} key={route.name} className='link' activeClassName='active'>
                                <div className="icon">
                                    <img src={route.icon} alt="icon" />
                                </div>
                                {isOpen && <motion.div variants={showAnimation}
                                                        initial="hidden"
                                                        animate="show"
                                                        exit="hidden"
                                                        className="link-text">
                                                <h6>{route.name}</h6>
                                            </motion.div>}
                            </NavLink>
                        ))}
                    </div>
                    <div className="bottom-link">
                        {isOpen && <motion.div className="credit">
                            <div className="text-box">
                                <p>Credit</p>
                                <h5>$3,528.74</h5>
                            </div>
                            <img src={Plus} alt="icon" />
                        </motion.div>}
                        <NavLink to='/settings' className="settings">
                            <div className="settings-left">
                                <img src={Settings} alt="icon" />
                                {isOpen && <h6>Settings</h6>}
                            </div>
                            {isOpen && <img src={RightArrow} alt="icon" />}
                        </NavLink>
                        {isOpen && <p>&copy; Touchcard</p>}
                    </div>
                </div>
            </motion.div>
            <motion.main animate={{width : isOpen ? 'calc(100% - 240px)' : '100%',
                          transition: {
                            duration: 0,
                            type: "spring",
                            damping: 10,
                          },}}>
                {children}
            </motion.main>
        </div>  
    );
};

export default SideBar;