import React from "react";
import GridContainer from "./GridContainer.js";
import Clock from "./Clock.js";
import "../styles/Main.css";

function Main() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="main-container">
      <Clock className="clock" data-date={formattedDate} />
      <GridContainer />
    </div>
  );
}

export default Main;
