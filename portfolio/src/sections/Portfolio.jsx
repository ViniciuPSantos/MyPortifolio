import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import img1 from "../assets/imagens/SceneStack.png";
import img2 from "../assets/imagens/LandPage.png";
import img3 from "../assets/imagens/TelaInicial.png";
import "../styles/Portfolio.css";

const projects = [
  {
    id: 1,
    key: "EcoBazar",
    title: "EcoBazar",
    image: img3,
    demo: "#",
    code: "https://github.com/ViniciuPSantos/ProjetoA3_2026_v1",
    tags: ["Java", "Swing", "MySQL", "JDBC"],
  },
  {
    id: 2,
    key: "Finwise",
    title: "Finwise",
    image: img2,
    demo: "https://finwise-five-livid.vercel.app/",
    code: "https://github.com/ViniciuPSantos/Finwise",
    tags: ["Java", "Spring Boot", "MySQL", "Docker", "React", "TypeScript"],
  },
  {
    id: 3,
    key: "SceneStack",
    title: "SceneStack",
    image: img1,
    demo: "https://scene-stack-front.vercel.app/",
    code: "https://github.com/ViniciuPSantos/SceneStack-API",
    tags: ["Java 21", "Spring Boot", "WebFlux", "Swagger", "Cache"],
  },
];

const Portfolio = () => {
  const { t } = useLang();

  return (
    <section id="portfolio" className="portfolio-section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t.projects.title}
      </motion.h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{t.projects.items[project.key]}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {t.projects.viewCode}
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  {t.projects.viewDemo}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;