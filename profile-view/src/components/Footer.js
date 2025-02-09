import React from "react";
import "../css/footer.css"

function Footer() {
    return (
        <div className="footer">
            <p>Coded by:{" "}
                <a href={ '' } className="tooltip">
                    K1ngHandy
                    <span className="tooltiptext">{ '' }</span>
                </a>
            </p>
        </div>
    )
}

export default Footer;