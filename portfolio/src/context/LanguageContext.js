import React, { createContext, useContext, useState } from "react";

const translations = {
  pt: {
    nav: { home: "Início", about: "Sobre", projects: "Projetos", contact: "Contato" },
    hero: {
      intro: "Sou",
      roles: ["Desenvolvedor Backend", "Especialista em Java/Spring", "Engenheiro de Software"],
      subtitle:
        "Construo APIs robustas e escaláveis com Java e Spring Boot. Foco em código limpo, arquitetura sólida e boas práticas.",
      cta: "Ver Projetos",
    },
    stack: { title: "Minha", titleHighlight: "Stack", subtitle: "Tecnologias e ferramentas que uso no dia a dia" },
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      intro: "I'm a",
      roles: ["Backend Developer", "Java/Spring Specialist", "Software Engineer"],
      subtitle:
        "I build robust and scalable APIs with Java and Spring Boot. Focused on clean code, solid architecture and best practices.",
      cta: "View Projects",
    },
    stack: { title: "My", titleHighlight: "Tech Stack", subtitle: "Technologies and tools I work with daily" },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("pt");
  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);