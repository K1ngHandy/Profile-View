import React, { useEffect } from "react";
import "../styles/GridContainer.css";
import linksData from "../data/linksData";

function GridContainer({ openLink }) {
  useEffect(() => {
    const buttons = document.querySelectorAll(".main-container button");

    const handleScroll = () => {
      let closestButton = null;
      let closestDistance = Infinity;

      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const distance = Math.abs(rect.left - window.innerWidth / 2);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestButton = button;
        }
      });

      buttons.forEach((button) => {
        button.classList.remove("focused");
      });

      if (closestButton) {
        closestButton.classList.add("focused");
      }
    };

    const gridContainer = document.querySelector(".grid-container");
    gridContainer.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      gridContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="grid-container">
      {linksData.slice(0, 9).map((link, idx) => (
        <React.Fragment key={idx}>
          <button
            className="tooltip"
            onClick={() => openLink(link.url)}
            title={link.name}
          />

          <img src={link.icon} alt={link.name} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default GridContainer;
