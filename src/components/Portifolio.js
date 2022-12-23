import React from "react";
import Divider from "./Divider";
import imgalurastudies from "../assets/images/alura-studies.png";
import imgCalculadora from "../assets/images/calculadorajs.png";
import imgPrevisao from "../assets/images/previsaotempo.png";
import imgListaCompra from "../assets/images/listadecompras.png";
import imgDown from "../assets/icons/down.svg";
import imgUp from "../assets/icons/up.svg";

const Portifolio = () => {

  const [showElements, setShowElements] = React.useState(false);

  const showOrHideElements = () => {
    setShowElements(!showElements);
  };


  return (



    <div className="container">
      <Divider title="Portifólio" />

      <div
        className="portifolio-container  animate__animated animate__fadeInRight"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "5px",
        }}
      >
        <div
          className="portifolio-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "300px",
            height: "auto",
            alignItems: "center",
            marginBottom: "60px",
            borderRadius: "10px",
            boxShadow: "rgb(2 251 90) 0px 0px 10px",
          }}
        >
          <div
            className="portifolio-item-title"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "18px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Alura Studies
            </h3>
          </div>
          <div
            className="portifolio-item-img"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={imgalurastudies}
              alt="alura studies"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div
            className="portifolio-item-description"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Projeto desenvolvido durante o curso de React da Alura
            </p>
          </div>
        </div>
        <div
          className="portifolio-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "300px",
            height: "auto",
            alignItems: "center",
            marginBottom: "60px",
            borderRadius: "10px",
            boxShadow: "rgb(2 251 90) 0px 0px 10px",
          }}
        >
          <div
            className="portifolio-item-title"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "18px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Alura Studies
            </h3>
          </div>
          <div
            className="portifolio-item-img"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={imgCalculadora}
              alt="alura studies"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div
            className="portifolio-item-description"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Projeto desenvolvido durante o curso de React da Alura
            </p>
          </div>
        </div>

        <div
          className="portifolio-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "300px",
            height: "auto",
            alignItems: "center",
            marginBottom: "60px",
            borderRadius: "10px",
            boxShadow: "rgb(2 251 90) 0px 0px 10px",
          }}
        >
          <div
            className="portifolio-item-title"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "18px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Alura Studies
            </h3>
          </div>
          <div
            className="portifolio-item-img"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={imgPrevisao}
              alt="alura studies"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className="portifolio-item-description"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Projeto desenvolvido durante o curso de React da Alura
            </p>
          </div>
        </div>

        <div
          className="portifolio-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "300px",
            height: "auto",
            alignItems: "center",
            marginBottom: "60px",
            borderRadius: "10px",
            boxShadow: "rgb(2 251 90) 0px 0px 10px",
          }}
        >
          <div
            className="portifolio-item-title"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "18px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Alura Studies
            </h3>
          </div>
          <div
            className="portifolio-item-img"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={imgListaCompra}
              alt="alura studies"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className="portifolio-item-description"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Projeto desenvolvido durante o curso de React da Alura
            </p>
          </div>
        </div>

        <div
          className="portifolio-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "300px",
            height: "auto",
            alignItems: "center",
            marginBottom: "60px",
            borderRadius: "10px",
            boxShadow: "rgb(2 251 90) 0px 0px 10px",
          }}
        >
          <div
            className="portifolio-item-title"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                color: "#fff",
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "18px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Alura Studies
            </h3>
          </div>
          <div
            className="portifolio-item-img"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={imgListaCompra}
              alt="alura studies"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className="portifolio-item-description"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "auto",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                color: "#FFF",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "2rem",
              }}
            >
              Projeto desenvolvido durante o curso de React da Alura
            </p>
          </div>
        </div>
      </div>

      { showElements && (



<div
  className="portifolio-container animate__animated animate__slideInRight"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    marginBottom: "10px",
  }}
>
  <div
    className="portifolio-item"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "300px",
      height: "auto",
      alignItems: "center",
      marginBottom: "60px",
      borderRadius: "10px",
      boxShadow: "rgb(2 251 90) 0px 0px 10px",
    }}
  >
    <div
      className="portifolio-item-title"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <h3
        style={{
          color: "#fff",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "18px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Alura Studies
      </h3>
    </div>
    <div
      className="portifolio-item-img"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={imgalurastudies}
        alt="alura studies"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
    <div
      className="portifolio-item-description"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: "#FFF",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Projeto desenvolvido durante o curso de React da Alura
      </p>
    </div>
  </div>
  <div
    className="portifolio-item"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "300px",
      height: "auto",
      alignItems: "center",
      marginBottom: "60px",
      borderRadius: "10px",
      boxShadow: "rgb(2 251 90) 0px 0px 10px",
    }}
  >
    <div
      className="portifolio-item-title"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <h3
        style={{
          color: "#fff",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "18px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Alura Studies
      </h3>
    </div>
    <div
      className="portifolio-item-img"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={imgCalculadora}
        alt="alura studies"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
    <div
      className="portifolio-item-description"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: "#FFF",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Projeto desenvolvido durante o curso de React da Alura
      </p>
    </div>
  </div>

  <div
    className="portifolio-item"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "300px",
      height: "auto",
      alignItems: "center",
      marginBottom: "60px",
      borderRadius: "10px",
      boxShadow: "rgb(2 251 90) 0px 0px 10px",
    }}
  >
    <div
      className="portifolio-item-title"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
      }}
    >
      <h3
        style={{
          color: "#fff",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "18px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Alura Studies
      </h3>
    </div>
    <div
      className="portifolio-item-img"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={imgPrevisao}
        alt="alura studies"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        }}
      />
    </div>
    <div
      className="portifolio-item-description"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: "#FFF",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Projeto desenvolvido durante o curso de React da Alura
      </p>
    </div>
  </div>

  <div
    className="portifolio-item"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "300px",
      height: "auto",
      alignItems: "center",
      marginBottom: "60px",
      borderRadius: "10px",
      boxShadow: "rgb(2 251 90) 0px 0px 10px",
    }}
  >
    <div
      className="portifolio-item-title"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
      }}
    >
      <h3
        style={{
          color: "#fff",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "18px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Alura Studies
      </h3>
    </div>
    <div
      className="portifolio-item-img"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={imgListaCompra}
        alt="alura studies"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        }}
      />
    </div>
    <div
      className="portifolio-item-description"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: "#FFF",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Projeto desenvolvido durante o curso de React da Alura
      </p>
    </div>
  </div>

  <div
    className="portifolio-item"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "300px",
      height: "auto",
      alignItems: "center",
      marginBottom: "60px",
      borderRadius: "10px",
      boxShadow: "rgb(2 251 90) 0px 0px 10px",
    }}
  >
    <div
      className="portifolio-item-title"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
      }}
    >
      <h3
        style={{
          color: "#fff",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "18px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Alura Studies
      </h3>
    </div>
    <div
      className="portifolio-item-img"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={imgListaCompra}
        alt="alura studies"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        }}
      />
    </div>
    <div
      className="portifolio-item-description"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: "#FFF",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          textAlign: "center",
          marginBottom: "40px",
          marginTop: "2rem",
        }}
      >
        Projeto desenvolvido durante o curso de React da Alura
      </p>
    </div>
  </div>
  
</div>

)}
      {/* 2section */}

          <div className='button-vermais'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            height: 'auto',
            alignItems: 'center',
          }}
          >
            <a onClick={showOrHideElements} style={{display: showElements ? "none" : "block"}}>
              <img src={imgDown} alt="down" style={{width: '30px', height: '30px', marginRight: '10px'}}/>
            </a>

            <a onClick={showOrHideElements} style={{display: showElements ? "block" : "none"}}>
              <img src={imgUp} alt="up" style={{width: '30px', height: '30px', marginRight: '10px'}}/>
            </a>
          </div>


    </div>
  );
};

export default Portifolio;
