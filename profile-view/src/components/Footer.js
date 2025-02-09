import React from "react";
import "../css/footer.css"

const url = 'https://github.com/K1ngHandy';

function Footer() {
    return (
        <div className="footer">
            <p>Coded by:{" "}
                <a href={url} className="tooltip">K1ngHandy
                    <span className="tooltiptext">{url}</span>
                </a>
            </p>
        </div>
    )
}

export default Footer;