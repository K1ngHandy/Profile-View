import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import linksData from '../data/linksData';
import { ThemeContext } from '../context/ThemeContext.js';
import '../styles/Footer.css';
import { githubIconWhite, githubIconBlack } from '../assets/images';

function Footer({ active, onMouseOver, onMouseOut, visible }) {
	const { theme } = useContext(ThemeContext);

	const githubPreviewIcon =
		theme === 'dark' ? githubIconWhite : githubIconBlack;
	const { url: githubUrl } =
		linksData.find((link) => link.name === 'GitHub') || {};

	const footerId = 'footer-github-link';

	return (
		<footer className={`footer ${visible ? 'visible' : 'hidden'}`}>
			<p>
				{'Coded by: '}
				<a
					href={githubUrl || '#'}
					target="_blank"
					rel="noopener noreferrer"
					className={`link ${active === footerId ? 'active' : ''}`}
					onMouseOver={() => onMouseOver(footerId)}
					onMouseOut={onMouseOut}
					onFocus={() => onMouseOver(footerId)}
					onBlur={onMouseOut}
				>
					K1ngHandy
					{active && (
						<span className="active-text">
							<img
								src={githubPreviewIcon}
								alt="GitHub"
								className="icons"
							/>{' '}
							GitHub
						</span>
					)}
				</a>
				<br></br>
				<span>
					&nbsp;&copy;{new Date().getFullYear()}, All rights reserved.
				</span>
			</p>
		</footer>
	);
}

Footer.propTypes = {
	active: PropTypes.string,
	onMouseOver: PropTypes.func.isRequired,
	onMouseOut: PropTypes.func.isRequired,
	visible: PropTypes.bool,
};

export default Footer;
