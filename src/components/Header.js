import React from "react";
import "../styles/Header.css";
import lightLogo from "../assets/images/LionCoinToken.png";

function Header() {
  return (
    <header className="header">
      <h1>K1ngHandy</h1>
      <p>🧭 Downingtown, PA</p>
      <img src={lightLogo} className="App-logo bounce" alt="logo" />
    </header>
  );
}

export default Header;
