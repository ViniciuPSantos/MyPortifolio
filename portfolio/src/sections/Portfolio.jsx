import React from "react";
import { motion } from "framer-motion";
import img1 from '../assets/imagens/hzc.png';
import img2 from '../assets/imagens/LandPage.png';
import img3 from '../assets/imagens/SceneStack.png';
import '../styles/Portfolio.css';

const projects = [
    {
        id: 1,
        title: "EcoBazar",
        description: "A plataform in Java and JFramex that connects small businesses to customers.",
        image: img3,
        demo: "#",
        code: "https://github.com/ViniciuPSantos/ProjetoA3_2026_v1"
    },

    {
        id: 2,
        title: "Finwise",
        description: "A personal finance platform built with React, TypeScript, and Spring Boot.",
        image: img2,
        demo: "https://finwise-five-livid.vercel.app/",
        code: "https://github.com/ViniciuPSantos/Finwise"
    },

    {
        id: 3,
        title: "SceneStack",
        description: "A REST API built with Java and Spring Boot for searching movies and series via the OMDb API.",
        image: img1,
        demo: "https://scene-stack-front.vercel.app/",
        code: "https://github.com/ViniciuPSantos/SceneStack-API"
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