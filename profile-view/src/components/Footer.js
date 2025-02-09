import React from "react";
import "../css/footer.css"
import linksData from "../data/linksData";
import githubIcon from "../assets/github-mark-white.png";

function Footer() {
    const link = linksData.find(link => link.name === "GitHub");

    return (
        <div className="footer">
            <p>{'Coded by: '}
                <a href={link ? link.url : '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="tooltip">
                        K1ngHandy
                    <span className="tooltiptext">{
                        <img src={githubIcon} alt="GitHub" className="icons" />
                        }
                        GitHub
                    </span>
                </a>
            </p>
        </div>
    )
}

export default Footer;