// imports
import React, { useState, useEffect } from "react";
import "../css/main.css"
import linksData from "../data/linksData";

function Main() {
    const [clock, setClock] = useState(new Date());
    const [blink, setBlink] = useState(true);
    
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
            <div className="clock" data-date={dateFormat(clock)}>{timeFormat(clock)}</div>
            <br />
            <div className="grid-container">
                {linksData.map((link, idx) => (
                    <button key={idx} onClick={() => openLink(link.url)}>
                        <img src={link.icon} alt={link.name} className="icon" />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Main;