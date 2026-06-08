import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import '../styles/NavBar.css';

const NavBar = () =>{
    const { t, lang, toggleLang } = useLang();

    return(
        <nav className="navbar">
            <div className="logo">VS</div>

            <ul className="nav-links">
                <li><Link to="home" smooth={true} duration={500}>{t.nav.home}</Link></li>
                <li><Link to="about" smooth={true} duration={500}>{t.nav.about}</Link></li>
                <li><Link to="portfolio" smooth={true} duration={500}>{t.nav.projects}</Link></li>
            </ul>

            <div className="nav-actions">
                <a href="https://www.linkedin.com/in/vinicius-de-paula-santos-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social"
                arial-label="LinkedIn">
                    <FaLinkedin/>
                </a>

                <a href="https://github.com/ViniciuPSantos"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social"
                arial-label="GitHub">
                    <FaGithub/>
                </a>

                <button className="lang-toggle" onClick={toggleLang} arial-label="Trocar idioma">
                    {lang === "pt" ? "EN" : "PT"}
                </button>

                <button className="contact-btn">
                    <Link to="contact" smooth={true} duration={700} offset={-80}>
                        {t.nav.contact}
                    </Link>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;