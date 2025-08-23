import React from 'react';
import '../styles/Header.css';
import { logoLight } from '../assets/images';

function Header(props) {
	const { company, location } = props.data;

	return (
		<header className="header">
			<hr className="divider" />
			<h1>{company} </h1>
			<p
				id="location"
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
				src={logoLight}
				className="App-logo bounce"
				alt="logo"
			/>
		</header>
	);
}

export default Header;
