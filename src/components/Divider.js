import React from "react";

const Divider = ({ title }) => {
    return (
        <div
            className="divider"
            style={{
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10px",
            }}
        >
            <div className="divider">
                <span></span>
                <span>{title}</span>
                <span></span>
            </div>
        </div>
    );

};

export default Divider;