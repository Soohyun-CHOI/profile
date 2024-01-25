import React from "react";
import "../styles/Home.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";

function Home() {
    const profile = require("../assets/profile.png");

    return (
        <div className="Home">
            <div className="left-side">
                <div className="subtitle">Hello, I'm</div>
                <div className="title">Soohyun<br/>Choi</div>
                <div className="links">
                    <Link to="https://github.com/Soohyun-CHOI">
                        <FontAwesomeIcon icon={faGithub} size="3x"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/soohyn-choi/">
                        <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                    </Link>
                    <button className="resume">Resume</button>
                </div>
            </div>
            <img src={profile} alt="profile"/>
        </div>
    );
}

export default Home;