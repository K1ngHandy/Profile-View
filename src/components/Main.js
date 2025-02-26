import React, { useState, useEffect } from "react";
import GridContainer from "./GridContainer.js";
import "../styles/Main.css";
import linksData from "../data/linksData.js";

function Main() {
  const [clock, setClock] = useState(new Date());
  const [blink, setBlink] = useState(true);

  const { icon: githubIcon, url: githubUrl } =
    linksData.find((link) => link.name === "GitHub") || {};

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
      setBlink((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeFormat = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return (
      <>
        {hours}
        <span className={blink ? "blink" : ""}>:</span>
        {minutes}
        <span className={blink ? "blink" : ""}>:</span>
        {seconds}
      </>
    );
  };

  const dateFormat = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="main-container">
      <div className="clock" data-date={dateFormat(clock)}>
        <div className="tooltip">
          {timeFormat(clock)}
          <span className="tooltiptext">{dateFormat(clock)}</span>
        </div>
      </div>
      <br />
      <GridContainer openLink={openLink} />
      <hr className="divider" />
      <p>
        {"Coded by: "}
        <a
          href={githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="tooltip"
        >
          K1ngHandy
          <span className="tooltiptext">
            {githubIcon && (
              <img src={githubIcon} alt="GitHub" className="icons" />
            )}
            GitHub
          </span>
        </a>
        <br></br>
        &nbsp;&copy;{new Date().getFullYear()}, All rights reserved.
      </p>
    </div>
  );
}

export default Main;
