import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import "../styles/NavBar.css";

const NavBar = () => {
  const { t, lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">VS</div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>{t.nav.home}</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>{t.nav.about}</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} onClick={closeMenu}>{t.nav.projects}</Link></li>
        </ul>

        <div className="nav-actions">
          <a
            href="https://www.linkedin.com/in/vinicius-de-paula-santos-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          
          <a
            href="https://github.com/ViniciuPSantos"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social"
            aria-label="GitHub">
            <FaGithub />
          </a>

          <button className="lang-toggle" onClick={toggleLang} aria-label="Trocar idioma">
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <button className="contact-btn">
            <Link to="contact" smooth={true} duration={700} offset={-80} onClick={closeMenu}>
              {t.nav.contact}
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;