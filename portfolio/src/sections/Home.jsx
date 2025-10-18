import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          I’m a <span>Full Stack Software Developer</span>
        </h1>
        <p>
          Crafting responsive and efficient web experiences using React, Node.js,
          and Java. Focused on clean code and scalable design.
        </p>
        <button className="primary-btn"><Link to="portfolio">Previous Projects</Link></button>
      </motion.div>
    </section>
  );
};

export default Home;
