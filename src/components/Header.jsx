import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

// nav bar 
function Header() {
    // this will collapse nav bar when is it true 
    const [collapse, setCollapse] = useState(true);

    return (

        <Navbar expand="none">
            {/* nav bar logo wcich will take you to the home page if you click it */}
            <img src={logo} id="logo" alt="logo" />
            {/* nav bar button */}
            <Navbar.Toggle className="float-right "
                id='toggle_btn' aria-controls="navbarNav"
                onClick={() => { setCollapse(!collapse) }}>
                <FontAwesomeIcon id='icon' icon={faBars} />
            </Navbar.Toggle>

            {/* nav bar item list  */}
            <div className={collapse === false ? "collapse navbar-collapse show mystyle" : "collapse navbar-collapse mystyle"}
                id="navbarNav">

                <Navbar.Toggle className="float-right "
                    id='toggle_btn' aria-controls="basic-navbar-nav"
                    onClick={() => { setCollapse(!collapse) }} >
                    <FontAwesomeIcon id='icon' icon={faTimes} />
                </Navbar.Toggle>

                <Nav className=" mt-5 mr-5">
                    <NavLink className="navItem_style whiteColor" to="/about-us" onClick={() => { setCollapse(!collapse) }}>من نحن ؟</NavLink>
                    <NavLink className="navItem_style whiteColor" to="/services" onClick={() => { setCollapse(!collapse) }}>خدماتنا</NavLink>
                    <NavLink className="navItem_style whiteColor" to="/projects" onClick={() => { setCollapse(!collapse) }}>أعمالنا</NavLink>
                    <NavLink className="navItem_style whiteColor" to="/order" onClick={() => { setCollapse(!collapse) }}>تواصل معنا وتقدم بطلبك</NavLink>
                </Nav>

            </div>
        </Navbar >


    );
}

export default Header;