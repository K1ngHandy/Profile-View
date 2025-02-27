import React, { useState } from "react";
import "../styles/Footer.css";
import linksData from "../data/linksData";

function Footer() {
  const { icon: githubIcon, url: githubUrl } =
    linksData.find((link) => link.name === "GitHub") || {};

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <footer className="footer">
      <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {"Coded by: "}
        <a
          href={githubUrl || "#"}
          target="blank"
          rel="noopener noreferrer"
          className={`tooltip ${hover ? "active" : ""}`}
        >
          K1ngHandy
          <span className="tooltiptext">
            <img src={githubIcon} alt="GitHub" className="icons" />
            GitHub
          </span>
        </a>
        <br></br>
        <span>
          &nbsp;&copy;{new Date().getFullYear()}, All rights reserved.
        </span>
      </p>
      <hr className="divider" />
    </footer>
  );
}

export default Footer;
