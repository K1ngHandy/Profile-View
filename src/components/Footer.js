import React from "react";
import "../styles/Footer.css";
import linksData from "../data/linksData";

function Footer() {
  const { icon: githubIcon, url: githubUrl } =
    linksData.find((link) => link.name === "GitHub") || {};

  return (
    <footer className="footer">
      <p>
        {"Coded by: "}
        <a
          href={githubUrl || "#"}
          target="blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          K1ngHandy
          <span className="tooltiptext">
            <img src={githubIcon} alt="GitHub" className="icons" />
            GitHub
          </span>
        </a>
        <br></br>
        &nbsp;&copy;{new Date().getFullYear()}, All rights reserved.
      </p>
      <hr className="divider" />
    </footer>
  );
}

export default Footer;
