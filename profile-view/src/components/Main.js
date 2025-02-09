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
        }, 2000);
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

    return (
        <div className="main-container">
            <div className="clock">{timeFormat(clock)}</div>
            <br />
            <div className="grid-container">
                <div className="links">
                {linksData.map((link, idx) => (
                    <button key={idx} onClick={() => openLink(link.url)}>
                        {link.name}
                    </button>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Main;