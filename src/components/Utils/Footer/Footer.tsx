// import modules/packages
import React from "react";
import "./Footer.css";

// Footer component 
const Footer = () =>{
    return (
        <div id="app-footer" className="">
            <div id="footer-content" className="">
                <ol id="footer-list">
                    <li className="footer-list-item">
                        &copy;2023, moviesfiles.com
                    </li>
                    <li className="footer-list-item">
                        Developer: Joshua P. Siyame                        
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Footer