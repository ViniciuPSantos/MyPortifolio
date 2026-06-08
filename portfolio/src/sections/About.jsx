import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useLang } from "../context/LanguageContext";
import "../styles/About.css";
import profilePic from "../assets/profile.jpg";
import cvFile from "../assets/ViniciusSantos-CV.pdf"; 

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-image-container"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-border"></div>
        <img src={profilePic} alt="Profile" className="about-image" />
      </motion.div>
      <motion.div
        className="about-info"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>{t.about.title}</h2>
        <p>{t.about.text}</p>
        <div className="about-buttons">
          <button className="btn-primary">
            <Link to="contact" smooth={true} duration={700} offset={-80}>
              {t.about.hire}
            </Link>
          </button>
          <button className="btn-outline">
            <a href={cvFile} download="ViniciusSantos-CV.pdf">
              {t.about.resume}
            </a>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
export default About;