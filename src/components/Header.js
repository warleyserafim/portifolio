import React from "react";
import imagem from "../assets/images/avataaars.png";
import logo from "../assets/images/logo.png";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import cvsvg from "../assets/icons/cv.svg";
import contacteme from "../assets/icons/contactme.svg";
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders'


const Header = () => {



  return (
    <div className="container">
      <div className="hero">
        <div className="hero__sections">
          <div className="hero__sections__image">
            <img src={logo} alt="avatar"/>
   
          <div className="hero__sections__content">
            <div className="hero__sections__content__text">
              <button className="active">
                HOME
              </button>
              <button>
                SOBRE MIM
              </button>
              <button>
                PROJETOS
              </button>
              <button>
                SKILLS
              </button>
            </div>
          </div>
          </div>
        </div>
        <div className="hero__text">
          <div className="hero__text__title">
            <div className="hero__text__wrapper">
              <h1 >
                Hi, I'm <span className="name">Warley Serafim</span>
              </h1>
              <h2>
                Full Stack Developer
              </h2>
            </div>
            <div className="hero__icons">
              <a href="/">
                <AiFillGithub />
              </a>
              <a href="/">
                <AiFillLinkedin />
              </a>
              <a href="/">
                <AiFillInstagram />
              </a>
            </div>
          </div>
          <div className="hero__image">
            <img src={imagem} alt="profile"/>
          </div>

          <div className="button__cv">
            <a href="/" >
              Download CV
              <img src={cvsvg} alt="cv"/>
            </a>
            <button>
              Contact Me
              <img src={contacteme} alt="contact"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
