import React from "react";
import { Link } from "react-scroll";
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">VS</div>
            <ul className="nav-links">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="portfolio" smooth={true} duration={500}>Projects</Link></li>
            </ul>
            <button className="contact-btn">
                <Link to="contact" smooth={true} duration={700} offset={-80}>Contact</Link>
            </button>
        </nav>
    )
}

export default NavBar;