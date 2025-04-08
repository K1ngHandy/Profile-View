import React from 'react';
import '../styles/Header.css';
import { logoLight } from '../assets/images';

function Header(props) {
	console.log('Props:', props);
	const { display_name: displayName, company, location } = props.data;

	return (
		<header className="header">
			<hr className="divider" />
			<h1>{company} </h1>
			<h2>{displayName}</h2>
			<p>🧭 {location}</p>
			<img
				src={logoLight}
				className="App-logo bounce"
				alt="logo"
			/>
		</header>
	);
}

export default Header;
