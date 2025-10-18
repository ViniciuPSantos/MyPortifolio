import React from "react";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">VS</div>

                <div className="footer-socials">
                    <a href="https://github.com/ViniciuPSantos" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/vinícius-de-paula-santos-51284a310" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/depaula.vini" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>

            <p>© 2025 Vinícius Santos. All rights reserved.</p>
        </footer>
    )
}

export default Footer;