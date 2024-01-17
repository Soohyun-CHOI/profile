import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <div id="logo">Soohyun Choi</div>
            <div id="menu">
                <NavLink className="menu-item" to="/">Home</NavLink>
                <NavLink className="menu-item" to="/projects">Projects</NavLink>
                <NavLink className="menu-item" to="/resume">Resume</NavLink>
                <NavLink className="menu-item" to="/contact">Contact</NavLink>
            </div>
        </div>
    );
}

export default Header;