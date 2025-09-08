import React from 'react';
import '../styles/Header.css';
// import { logoLight } from '../assets/images';

function Header(props) {
	const { id, username, location, logo, alt } = props.profile;

	return (
		<header className="header">
			<hr className="divider" />
			<h1>{username}</h1>
			<p
				className="location"
				id={id}
				style={{ cursor: 'pointer' }}
				onClick={() =>
					window.open(
						`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
							location
						)}`,
						'_blank'
					)
				}
			>
				🧭 {location}
			</p>
			<img
				src={logo}
				className="app-logo bounce"
				alt={alt}
			/>
		</header>
	);
}

export default Header;
