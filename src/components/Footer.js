import React from "react";




const Footer = () => {
    return (
        <div className="copy-right"
        style={{
            backgroundColor: "rgb(38 38 38)",
            color: "#fff",
            padding: "1rem",
            display: "flex",
            fontWeight: "bold",
            justifyContent: "center",
        }}
        >
            <div className="text-right"
            style={{
                width: "100%",
                textAlign: "start",
            }}
            >
                <p>© 2022 - Todos os direitos reservados Warley Serafim</p> 
            </div>

            <div className="icons"
            style={{
                display: "flex",
                alignItems: "end",
                gap: "1rem",
            }}
            >
                <a href="https://www.facebook.com/">
                    <i
                        style={{
                            backgroundColor: "#02fb5a",
                            color: "#fff",
                            borderRadius: "50%",
                            textAlign: "center",
                            lineHeight: "30px",
                            width: "30px",
                            height: "30px",

                        }}
                    className="fab fa-facebook-f"></i>
                </a>
                <a
                    style={{
                        backgroundColor: "#02fb5a",
                        color: "#fff",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "30px",
                        width: "30px",
                        height: "30px",

                    }}
                href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                </a>
                <a
                    style={{
                        backgroundColor: "#02fb5a",
                        color: "#fff",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "30px",
                        width: "30px",
                        height: "30px",

                    }}
                href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>

        </div>
    )
}

export default Footer
