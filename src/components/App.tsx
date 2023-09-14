// import modules/packages
import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";

// import components
import Footer from "./Utils/Footer/Footer";
import Navigation from "./Utils/TopNavigation/TopNavigation";
import AsideNavigation from "./Utils/AsideNavigation/AsideNavigation";
import Movies from "./Movies/Movies";
import MainBodyNav from "./Utils/MainBodyNav/MainBodyNav";
// App component
const App = () => {
    return (
        <BrowserRouter>
            <div id="app-structure" className="">
                <Navigation />
                <div id="body-container" className="">
                    <div id="aside-nav">
                        <AsideNavigation />
                    </div>
                    <div id="main-container" className="app-section-">
                        <MainBodyNav />
                        <Movies />
                        <Footer />
                    </div>
                </div>
                
            </div>
        </BrowserRouter>
    );
};

export default App;
