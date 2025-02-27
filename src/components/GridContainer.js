import React from "react";
import "../styles/GridContainer.css";
import linksData from "../data/linksData";

function GridContainer() {
  const { icon: githubIcon, url: githubUrl } =
    linksData.find((link) => link.name === "GitHub") || {};

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="grid-container">
        {linksData.slice(0, 9).map((link, idx) => (
          <button
            key={idx}
            className="tooltip"
            onClick={() => openLink(link.url)}
            title={link.name}
          >
            <img src={link.icon} alt={link.name} className="icons" />
            <span className="tooltiptext">{link.name}</span>
          </button>
        ))}
      </div>
      <hr className="divider" />
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
        $nbsp;&copy;{new Date().getFullYear()}, All rights reserved.
      </p>
    </>
  );
}

export default GridContainer;
