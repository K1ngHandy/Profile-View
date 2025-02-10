// imports
import React, { useState, useEffect } from "react";
import "../css/main.css"
import linksData from "../data/linksData";
import logo from "../assets/LightWatermark.png"
import githubIcon from "../assets/github-mark-white.png";

function Main() {
    const [clock, setClock] = useState(new Date());
    const [blink, setBlink] = useState(true);

    const link = linksData.find(link => link.name === "GitHub");
    
    const openLink = (url) => {
        window.open(url, '_blank');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date());
            setBlink(prev => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const timeFormat = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
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
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="main-container">
            <img className="App-logo" src={logo} alt="logo" />
            <div className="clock" data-date={dateFormat(clock)}>
                <div className="tooltip">
                    {timeFormat(clock)}
                    <span className="tooltiptext">{dateFormat(clock)}</span>
                </div>
            </div>
            
            <div className="grid-container">
                <h2 className="selectable-links">Selectable Links:</h2>
                {linksData.map((link, idx) => (
                    <button className="tooltip" key={idx} onClick={() => openLink(link.url)} title={link.name}>
                        <img src={link.icon} alt={link.name} className="icons" />
                        <span className="tooltiptext">{link.name}</span>
                    </button>
                ))}
            </div>
            <hr className="divider" />
            <p>
                <a href={link ? link.url : '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="tooltip">
                        K1ngHandy
                    <span className="tooltiptext">
                        <img src={githubIcon} alt="GitHub" className="icons" />
                        GitHub
                    </span>
                </a>
                &nbsp;&copy;2025. All rights reserved.
            </p>
        </div>
    );
}

export default Main;