import React, { useState, useEffect } from "react";
import "../styles/Clock.css";
import linksData from "../data/linksData";

function Clock() {
  const [clock, setClock] = useState(new Date());
  const [blink, setBlink] = useState(true);

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
    <>
      <div className="clock-time">
        {timeFormat(clock)}
        <span className="tooltiptext">{dateFormat(clock)}</span>
      </div>
      <br />
    </>
  );
}

export default Clock;
