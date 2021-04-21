import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group';

// nav bar 
function Header() {
    // this will show nav bar when is it true 
    const [show, setShow] = useState(false);
    return (

        <Navbar expand="none">
            {/* nav bar logo wcich will take you to the home page if you click it */}
            <img src={logo} id="logo" alt="logo" />
            {/* nav bar button */}
            <Navbar.Toggle className="float-right "
                id='toggle_btn' aria-controls="navbarNav"
                onClick={() => { setShow(!show) }}>
                <FontAwesomeIcon id='icon' icon={faBars} />
            </Navbar.Toggle>

            {/* nav bar item list  */}
            <CSSTransition
                timeout={300}
                classNames='showNav'
                in={show}
                unmountOnExit
            >
                <div className="collapse navbar-collapse show" id="navbarNav">
                    <CSSTransition
                        timeout={1}
                        classNames='showInsideNav'
                        in={show}
                        unmountOnExit
                    >
                        <Navbar.Toggle className="float-right "
                            id='toggle_btn' aria-controls="basic-navbar-nav"
                            onClick={() => { setShow(!show) }} >
                            <FontAwesomeIcon id='icon' icon={faTimes} />
                        </Navbar.Toggle>
                    </CSSTransition>
                    <CSSTransition
                        timeout={1}
                        classNames='showInsideNav'
                        in={show}
                        unmountOnExit
                    >
                        <Nav className=" mt-5 mr-5">
                            <NavLink className="navItem_style whiteColor" to="/about-us" onClick={() => { setShow(!show) }}>من نحن ؟</NavLink>
                            <NavLink className="navItem_style whiteColor" to="/services" onClick={() => { setShow(!show) }}>خدماتنا</NavLink>
                            <NavLink className="navItem_style whiteColor" to="/projects" onClick={() => { setShow(!show) }}>أعمالنا</NavLink>
                            <NavLink className="navItem_style whiteColor" to="/order" onClick={() => { setShow(!show) }}>تواصل معنا وتقدم بطلبك</NavLink>
                        </Nav>
                    </CSSTransition>
                </div>
            </CSSTransition>
        </Navbar >


    );
}

export default Header;