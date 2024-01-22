import React from "react";
import "../styles/Home.scss";

function Home() {
    const profile = require("../assets/profile.png");

    return (
        <div className="Home">
            <div className="left-side">
                <div className="subtitle">Hello, I'm</div>
                <div className="title">Soohyun<br />Choi</div>
            </div>
                <img src={ profile } alt="profile" />
        </div>
    );
}

export default Home;