import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { useLang } from "../context/LanguageContext";
import "../styles/Home.css";

const Home = () => {
  const { t } = useLang();

  const sequence = t.hero.roles.flatMap((role) => [role, 2000]);

  return (
    <section id="home" className="home-section hero-bg">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          {t.hero.intro}{" "}
          <span className="highlight">
            <TypeAnimation
              key={sequence.join()} 
              sequence={sequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <button className="primary-btn">
          <Link to="portfolio" smooth={true} duration={500}>
            {t.hero.cta}
          </Link>
        </button>
      </motion.div>
    </section>
  );
};
export default Home;