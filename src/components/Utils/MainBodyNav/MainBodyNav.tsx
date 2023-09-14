// import modules/packages
import React from "react";
import "./MainBodyNav.css";

// MainBodyNav component
const MainBodyNav = () =>{
    return (
        <div id="main-body-nav">
            <ol id="main-body-nav-list">
                <li className="m-b-n-l-i">
                    <a href="" className="m-b-n-l-i-l">Latest</a>
                </li>
                <li className="m-b-n-l-i">
                    <a href="" className="m-b-n-l-i-l">Popular</a>
                </li>
            </ol>
        </div>
    );
};

export default MainBodyNav;