import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation} from "react-type-animation";
import { Link } from "react-scroll";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section  hero-bg">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          I’m a <span className="highlight"><TypeAnimation sequence={["Full Stack Developer", 2000, "Software Engineer", 2000, "Web Creator", 2000,]} wrapper="span" speed={50} repeat={Infinity} /></span>
        </h1>
        <p className="hero-subtitle">
          Crafting responsive and efficient web experiences using React, Node.js,
          Java and more! Focused on clean code and scalable design.
        </p>
        <button className="primary-btn"><Link to="portfolio">Previous Projects</Link></button>
      </motion.div>
    </section>
  );
};

export default Home;
