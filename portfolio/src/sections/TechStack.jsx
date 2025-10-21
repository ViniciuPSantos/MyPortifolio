import React, {useState, useEffect} from "react";
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMysql,
    SiGit,
    SiTypescript,
    SiTailwindcss,
    SiSpringboot,
    SiPython,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import '../styles/TechStack.css';

const techGroups = [
    [
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#83CD29" /> },
        { name: "MySQL", icon: <SiMysql color="#00618A" /> },
    ],
    [
        { name: "Java", icon: <FaJava color="#f89820" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
    ]
];

const TechStack = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % techGroups.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return(
        <section className="tech-section" id="stack">
      <motion.h2
        className="tech-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        My <span>Tech Stack</span>
      </motion.h2>

      <p className="tech-subtitle">Technologies and tools I work with daily</p>

      <div className="tech-grid-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="tech-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {techGroups[index].map((tech, i) => (
              <motion.div
                key={i}
                className="tech-card"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <p>{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
    )
}

export default TechStack;