import React from "react";
import "../css/footer.css"
import linksData from "../data/linksData";
import githubIcon from "../assets/github-mark-white.png";

function Footer() {
    const link = linksData.find(link => link.name === "GitHub");

    return (
        <footer className="footer">
            <p>&copy; 2025 
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
            . All rights reserved.</p>
        </footer>
    )
}

export default Footer;