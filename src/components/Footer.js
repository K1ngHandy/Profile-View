import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';
import linksData from '../data/linksData';
import { githubIconWhite } from '../assets/images';

function Footer(props) {
	const { onMouseOver, onMouseOut, active } = props;
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const { url: githubUrl } =
		linksData.find((link) => link.name === 'GitHub') || {};

	const footerId = 'footer-github-link';

	useEffect(() => {
		const scrollThreshold = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY <= 5) {
				setVisible(true);
			} else if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
				setVisible(currentScrollY < lastScrollY);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

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
				>
					K1ngHandy
					{active && (
						<span className="active-text">
							<img
								src={githubIconWhite}
								alt="GitHub"
								className="icons"
							/>
							GitHub
						</span>
					)}
				</a>
				<br></br>
				<span>
					&nbsp;&copy;{new Date().getFullYear()}, All rights reserved.
				</span>
			</p>
			<hr className="divider" />
		</footer>
	);
}

export default Footer;
