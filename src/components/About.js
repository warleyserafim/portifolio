import React, { useCallback } from "react";
import imagem from "../assets/images/about.gif";
import Divider from "./Divider";
import { Steps, Timeline, Badge, Card } from "antd";
const { Step } = Steps;

const About = () => {
  return (
    <div className="container">
      <Divider title="Sobre Mim" />
      <div
        className="about-hero"
      >
        <div
          className="about-hero-text"
          style={{
            width: "35%",
          }}
        >
          <h3
            style={{
              color: "#fff",
            }}
          >
            Olá, eu sou o{" "}
            <span style={{ color: "#02fb5a" }}>Warley Serafim</span>
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#fff",
            }}
          >
          sou um(a) desenvolvedor(a) Fullstack com expertise em Salesforce. Tenho 3 anos de experiência em desenvolvimento web e mobile, criando soluções tecnológicas personalizadas para empresas em diversos setores.

Como desenvolvedor Fullstack, sou especialista em linguagens de programação como JavaScript, HTML, CSS e Node.js, bem como em frameworks populares como React e Vue. Além disso, tenho experiência em banco de dados, APIs e integração de sistemas.

Sou um profissional comprometido com a excelência e a satisfação do cliente. Meu foco é sempre na qualidade do código, na usabilidade e na escalabilidade da solução que desenvolvo. Trabalho bem em equipe e tenho habilidades interpessoais fortes, o que me permite colaborar com outros desenvolvedores, designers e gerentes de projeto para criar soluções tecnológicas de alta qualidade.
          </p>
        </div>
        <div
          className="about-hero-image"
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div className="about-hero-image-container">
            <img src={imagem} alt="imagem" />
          </div>
        </div>
      </div>              
    </div>
  );
};

export default About;
