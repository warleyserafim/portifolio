import React from "react";
import Divider from "./Divider";

const Contato = () => {
  return (
    <div className="container">
      <Divider title="Contato" />

      <div
        className="social-media-icons"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <div
          className="content-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "1rem",
            width: "100%",
            maxWidth: "800px",
            marginBottom: "2rem",
          }}
        >
          <div
            className="content-item"
            style={{
              marginTop: "50px",
              padding: "1rem",
              borderRadius: "10px",
              position: "relative",
              boxShadow: "rgb(2 251 90) 0px 0px 10px",
              color: "white",
            }}
          >
            <i
              className="fas fa-phone-alt"
              style={{
                position: "absolute",
                width: "50px",
                height: "50px",
                top: "-25px",
                backgroundColor: "rgb(2 251 90)",
                color: "#fff",
                borderRadius: "50%",
                textAlign: "center",
                lineHeight: "50px",
              }}
            ></i>
            <div className="content-item-text">
              <p
                style={{
                  marginTop: "20px",
                  lineHeight: "30px",
                }}
              >
                Telefone
              </p>
              <span
                style={{
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                (11) 9 9999-9999
              </span>
            </div>
          </div>

          <div
            className="content-item"
            style={{
                marginTop: "50px",
                padding: "1rem",
                borderRadius: "10px",
                position: "relative",
                boxShadow: "rgb(2 251 90) 0px 0px 10px",
                color: "white",
            }}
          >
            <i
              className="fas fa-envelope"
              style={{
                position: "absolute",
                width: "50px",
                height: "50px",
                top: "-25px",
                backgroundColor: "#02fb5a",
                color: "#fff",
                borderRadius: "50%",
                textAlign: "center",
                lineHeight: "50px",
              }}
            ></i>
            <div className="content-item-text">
              <p style={{ marginTop: "20px", lineHeight: "30px" }}>E-mail</p>
              <span
                style={{
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                warleyserafim777@gmail.com
              </span>
            </div>
          </div>

          <div
            className="content-item"
            style={{
                marginTop: "50px",
                padding: "1rem",
                borderRadius: "10px",
                position: "relative",
                boxShadow: "rgb(2 251 90) 0px 0px 10px",
                color: "white",
            }}
          >
            <i
              className="fa-brands fa-linkedin"
              style={{
                position: "absolute",
                width: "50px",
                height: "50px",
                top: "-25px",
                backgroundColor: "#02fb5a",
                color: "#fff",
                borderRadius: "50%",
                textAlign: "center",
                lineHeight: "50px",
              }}
            ></i>
            <div className="content-item-text">
              <p style={{ marginTop: "20px", lineHeight: "30px" }}>Linkedin</p>
              <span
                style={{
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                linkedin.com/in/warleyserafim
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
