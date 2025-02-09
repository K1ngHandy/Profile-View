// imports
import React from "react";
import "../css/main.css"
import linksData from "../data/linksData";

function Main() {
    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="main-container">
            <div className="grid-container">
                {linksData.map((link, idx) => (
                    <button key={idx} onClick={() => openLink(link.url)}>
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Main;