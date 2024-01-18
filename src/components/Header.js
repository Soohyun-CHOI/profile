import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
    return (
        <div className="Header">
            <div id="logo">Soohyun Choi</div>
            <div id="menu">
                <NavLink to="/"
                         className={({isActive})  => isActive ? "active" : "inactive"}>Home</NavLink>
                <NavLink to="/projects"
                         className={({isActive})  => isActive ? "active" : "inactive"}>Projects</NavLink>
                <NavLink to="/resume"
                         className={({isActive})  => isActive ? "active" : "inactive"}>Resume</NavLink>
                <NavLink to="/contact"
                         className={({isActive})  => isActive ? "active" : "inactive"}>Contact</NavLink>
            </div>
        </div>
    );
}

export default Header;