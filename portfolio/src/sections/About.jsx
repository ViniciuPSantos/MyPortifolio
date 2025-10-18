import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import '../styles/About.css';
import profilePic from '../assets/profile.jpg';
import '../assets/ViníciusSantos-CV.pdf';

const About = () => {
    return(
        <section id="about" className="about-section">
            <motion.div
                className="about-image-container"
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
            >
                <div className="image-border"></div>
                <img src={profilePic} alt="Profile" className="about-image" />
            </motion.div>

            <motion.div
                className="about-info"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
            >
                <h2>About Me</h2>
                <p>My name is Vinícius Santos and I'm a passionate Full Stack Developer focused on building clean, efficient, and scalable web solutions. My goal is to combine design and functionality to create experiences that truly make an impact.</p>

                <div className="about-buttons">
                    <button className="btn-primary"><Link to="contact" smooth={true} duration={700} offset={-80}>Hire Me</Link></button>
                    <button className="btn-outline"><a href="../assets/ViníciusSantos-CV.pdf" download="ViníciusSantos-CV.pdf">Resume</a></button>
                </div>
            </motion.div>
        </section>
    )
}

export default About;