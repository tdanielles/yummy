import React from "react";
import logo from "../images/logo.png";
import "../styles/Logo.css";

function Logo() {
    return (
        <div className="logo">
            <img className="icon" src={logo} alt="logo"/>
            <h1 className="title">yummy</h1>
        </div>
    )
}

export default Logo;