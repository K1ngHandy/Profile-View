import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';
import linksData from '../data/linksData';
import { githubIconWhite } from '../assets/images';

function Footer(props) {
	const { mouseOver, mouseOut, active } = props;
	const [visible, setVisible] = useState(true);
	const [scrollY, setScrollY] = useState(0);

	const { url: githubUrl } =
		linksData.find((link) => link.name === 'GitHub') || {};

	const footerId = 'footer-github-link';

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;

			if (currentPosition > scrollY) {
				setVisible(false);
			} else {
				setVisible(true);
			}

			setScrollY(currentPosition);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollY]);

	return (
		<footer className={`footer ${visible ? 'visible' : 'hidden'}`}>
			<p>
				{'Coded by: '}
				<a
					href={githubUrl || '#'}
					target="blank"
					rel="noopener noreferrer"
					className={`link ${active === footerId ? 'active' : ''}`}
					onMouseOver={() => mouseOver(footerId)}
					onMouseOut={mouseOut}
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
