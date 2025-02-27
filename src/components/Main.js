import React from "react";
import GridContainer from "./GridContainer.js";
import Clock from "./Clock.js";
import "../styles/Main.css";

function Main() {
  return (
    <div className="main-container">
      <Clock />
      <GridContainer />
    </div>
  );
}

export default Main;
