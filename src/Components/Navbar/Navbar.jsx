import React, { useState } from "react";
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logoo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import juchan from '../../assets/juchan.jpg'
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {

    return (
        <nav className = 'flex-div'>
            <div className = 'nav-left flex div'>
            <img className="menu-icon" onClick={() => {console.log("Menu icon clicked!"); setSidebar((prev) => !prev);}}src={menu_icon}alt="menu icon"/>
            <Link to='/'><img className = 'logo' src={logo} alt=""></img></Link>
            </div>

            <div className = "nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type = "text" placeholder='Search'/>
                    <img src ={search_icon} alt=""></img>
                </div>
            </div>

            <div className= "nav-right flex-div">
                <img src ={upload_icon} alt=""></img>
                <img src ={more_icon} alt=""></img>
                <img src ={notification_icon} alt=""></img>
                <img src ={juchan} className = 'user-icon' alt=""></img>
            </div>
        </nav>
    )
}

export default Navbar