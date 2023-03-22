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

        </div>
    )
}

export default Footer
