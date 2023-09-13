// import modules/packages
import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Utils/TopNavigation/TopNavigation";

// App component
const App = () => {
    return (
        <BrowserRouter>
            <div id="app" className="">
                <Navigation />
                <div id="body-container">
                    <div id="aside-nav"></div>
                    <div id="main-container">
                        {/* <Router>
                            <Route></Route>
                        </Router> */}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
