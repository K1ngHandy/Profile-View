import React from "react";
import "../css/header.css";
import logo from "../assets/LightWatermark.png"

function Header() {
    return (
        <div className="header">
            <h1>K1ngHandy</h1>
            <img className="App-logo" src={logo} alt="logo" />
        </div>
    )
}

export default Header;