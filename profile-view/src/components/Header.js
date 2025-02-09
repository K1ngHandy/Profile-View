import React, { useState, useEffect } from "react";
import "../css/header.css";
import logo from '../LightWatermark.png';

function Header() {

    return (
        <div className="header">
            <h1>K1ngHandy</h1>
            <img src={logo} className="App-logo" alt="logo" />
            {/* <div className="clock">{timeFormat(clock)}</div> */}
        </div>
    )
}

export default Header;