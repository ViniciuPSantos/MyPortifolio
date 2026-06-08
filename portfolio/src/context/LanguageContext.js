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
    about: {
      title: "Sobre Mim",
      text: "Meu nome é Vinícius Santos e sou desenvolvedor backend focado em construir APIs limpas, eficientes e escaláveis com Java e Spring Boot. Meu objetivo é unir arquitetura sólida e boas práticas para criar soluções que realmente geram impacto.",
      hire: "Contrate-me",
      resume: "Currículo",
    },
    projects: {
      title: "Meus Projetos",
      viewCode: "Ver Código",
      viewDemo: "Ver Demo",
      items: {
        EcoBazar: "Plataforma desktop em Java e Swing que conecta pequenos negócios a clientes.",
        Finwise: "Plataforma de finanças pessoais construída com React, TypeScript e Spring Boot.",
        SceneStack: "API REST em Java e Spring Boot para busca de filmes e séries via OMDb API.",
      },
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Tem um projeto em mente ou só quer dizer olá? Me mande uma mensagem que eu respondo o quanto antes!",
      name: "Seu Nome",
      email: "Seu E-mail",
      message: "Sua Mensagem",
      send: "Enviar Mensagem",
      sending: "Enviando mensagem...",
      success: "Mensagem enviada com sucesso!",
      error: "Falha ao enviar a mensagem, tente novamente.",
    },
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
    about: {
      title: "About Me",
      text: "My name is Vinícius Santos and I'm a backend developer focused on building clean, efficient, and scalable APIs with Java and Spring Boot. My goal is to combine solid architecture and best practices to create solutions that truly make an impact.",
      hire: "Hire Me",
      resume: "Resume",
    },
    projects: {
      title: "My Projects",
      viewCode: "View Code",
      viewDemo: "View Demo",
      items: {
        EcoBazar: "Desktop platform built with Java and Swing that connects small businesses to customers.",
        Finwise: "Personal finance platform built with React, TypeScript, and Spring Boot.",
        SceneStack: "REST API built with Java and Spring Boot for searching movies and series via the OMDb API.",
      },
    },
    contact: {
      title: "Contact Me",
      subtitle: "Have a project in mind or just want to say hello? Drop me a message and I'll get back to you as soon as possible!",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending message...",
      success: "Message sent successfully!",
      error: "Failed to send the message, please try again.",
    },
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