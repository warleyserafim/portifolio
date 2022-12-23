import React from "react";
import Divider from "./Divider";
import iconJavaS from "../assets/icons/javascript-icon.svg";
import iconHtml from "../assets/icons/html-icon.svg";
import iconCss from "../assets/icons/css-icon.svg";
import iconReact from "../assets/icons/react-icon.svg";
import iconDocker from "../assets/icons/docker-icon.svg";
import iconNodejs from "../assets/icons/nodejs-icon.svg";
import iconTailwind from "../assets/icons/tailwind-icon.svg";
import iconInsomnia from "../assets/icons/insomnia-icon.svg";
import iconPostgres from "../assets/icons/postgres-icon.svg";
import iconGithub from "../assets/icons/github-icon.svg";
import iconMySql from "../assets/icons/mysql-icon.svg";
import iconMongo from "../assets/icons/mongo-icon.svg";
import iconTypeScript from "../assets/icons/typescript-icon.svg";
import iconPyton from "../assets/icons/python-icon.svg";
import iconVue from "../assets/icons/vue-icon.svg";
import iconNext from "../assets/icons/next-icon.svg";
import iconFigma from "../assets/icons/figma-icon.svg";
import iconSass from "../assets/icons/sass-icon.svg";


const Skills = () => {    
    return (
        <div className="container">
            <Divider title="Skills" />
            <h1
                style={{
                    color: "#fff",
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "50px",
                }}
            >Tecnologias e Habilidades</h1>
            <div className="skills"
            >
                <h3
                    style={{
                        color: "#fff",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        textAlign: "center",
                        marginBottom: "40px",
                        marginTop: "2rem",

                    }}
                >Tecnologias que Uso no Dia a Dia</h3>
                <div className="skills-item"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "60px",
                    }}
                >
                    <img src={iconJavaS} alt="javascript" />
                    <img src={iconHtml} alt="html" />
                    <img src={iconCss} alt="css" />
                    <img src={iconReact} alt="react" />
                    <img src={iconDocker} alt="docker" />
                    <img src={iconNodejs} alt="nodejs" />
                    <img src={iconTailwind} alt="tailwind" />
                    <img src={iconInsomnia} alt="insomnia" />
                    <img src={iconPostgres} alt="postgres" />
                    <img src={iconGithub} alt="github" />                    
                    <img src={iconMongo} alt="mongo" />

                </div>
                <h3
                    style={{
                        color: "#fff",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "18px",
                        textAlign: "center",
                        marginBottom: "40px",
                        marginTop: "60px",

                    }}
                >Outras Tecnologias que Ja Usei em Projetos</h3>
                <div className="skills-item"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "2rem",
                    }}
                >
                    <img src={iconMySql} alt="mysql" />
                    <img src={iconTypeScript} alt="typescript" />
                    <img src={iconPyton} alt="python" />
                    <img src={iconVue} alt="vue" />
                    <img src={iconNext} alt="next" />
                    <img src={iconFigma} alt="figma" />
                    <img src={iconSass} alt="sass" />

                </div>
            </div>
        </div>

    );
}

export default Skills;