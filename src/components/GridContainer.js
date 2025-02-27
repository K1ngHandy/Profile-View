import React from "react";
import "../styles/GridContainer.css";
import linksData from "../data/linksData";

function GridContainer() {
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
    </>
  );
}

export default GridContainer;
