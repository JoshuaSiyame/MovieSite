// import modules/packages
import React, { useState } from "react";
import "./TopNavigation.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Navigation component
const Navigation = () => {

    // states to control icons
    const [toggle, setToggle] = useState(false);

    // handle toggle 
    const handleToggle = () =>{
        setToggle(!toggle);
    };

    // handle un-toggle 
    const handleUnToggle = () =>{
        setToggle(false);
    }

    return (
        <div id="app-navigation" className="app-section-wrapper">
            <div id="nav-container">
                <NavLink to="/" className="logo">MoviesFiles</NavLink>
                <div id="nav-items-container">
                    <div id="top-nav-search-box">
                        <form id="search-box-1">
                            <div className="s-b-1-g">
                                <input type="text" placeholder="search movie here..." className="s-b-1-f-c" />
                            </div>
                        </form>
                    </div>
                    {toggle? <FaTimes id="close-icon" className="nav-icon" onClick={handleUnToggle} /> : <FaBars id="hamburger-icon" className="nav-icon" onClick={handleToggle} /> }
                </div>
            </div>
        </div>
    );
};

export default Navigation;
