import React, { useState, useEffect } from "react";
import "../css/header.css";
import logo from '../LightWatermark.png';

function Header() {
    const [clock, setClock] = useState(new Date());
    const [blink, setBlink] = useState(true);

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

    return (
        <div className="header">
            <h1>K1ngHandy</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="clock">{timeFormat(clock)}</div>
        </div>
    )
}

export default Header;