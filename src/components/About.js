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
            Where can I get some? There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
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
