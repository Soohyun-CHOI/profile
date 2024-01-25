import React from "react";
import "../styles/NotFound.scss";

function NotFound() {
    const notFound = require("../assets/404NotFound.png");

    return (
        <div className="NotFound">
            <div>
                <span className="blue">OOPS! </span> <span>PAGE NOT FOUND</span>
            </div>
            <img src={notFound} alt="404 Not Found"/>
            <div><a href="https://storyset.com/online">Online illustrations by Storyset</a></div>
        </div>
    );
}

export default NotFound;