import React from "react";
import { motion } from "framer-motion";
import img1 from '../assets/imagens/hzc.png';
import img2 from '../assets/imagens/landingpage.png';
import img3 from '../assets/imagens/bazar.png';
import '../styles/Portfolio.css';

const projects = [
    {
        id: 1,
        title: "ConectaBazares",
        description: "A plataform in Java and JFramex that connects small businesses to customers.",
        image: img3,
        demo: "#",
        code: "https://github.com/ViniciuPSantos/ProjetoA3"
    },

    {
        id: 2,
        title: "Landing Page",
        description: "A personal landing page website built with React and Framer Motion.",
        image: img2,
        demo: "https://vinicius-landing.vercel.app",
        code: "https://github.com/ViniciuPSantos/Vinicius-Landing"
    },

    {
        id: 3,
        title: "HZC Website",
        description: "A website for HZC company built with HTML, CSS, and JavaScript.",
        image: img1,
        demo: "https://viniciupsantos.github.io/HZC-site-alura",
        code: "https://github.com/ViniciuPSantos/HZC-site-alura"
    }
];

const Portfolio = () => {
    return(
        <section id="portfolio" className="portfolio-section">
            <motion.h2
                initial={{ opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{duration: 0.6}}
            >
                My Projects
            </motion.h2>

            <div className="portfolio-grid">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, y: 50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration: 0.6}}
                    >
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-buttons">
                                <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-primary">View Code</a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline">View Demo</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;