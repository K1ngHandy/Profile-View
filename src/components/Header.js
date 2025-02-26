import React from "react";
import "../styles/Header.css";
import logo from "../assets/images/LightWatermark.png";

function Header() {
  return (
    <header className="header">
      <h1>K1ngHandy</h1>
      <p>🧭 Downingtown, PA</p>
      <div className="App-logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
