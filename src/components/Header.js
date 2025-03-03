import React from 'react';
import '../styles/Header.css';
import { logoLight } from '../assets/images';

function Header(props) {
	// console.log(props);
	// Want to destructure API request display_name as displayName from props
	const { display_name: displayName, location } = props.data;

	return (
		<header className="header">
			<hr className="divider" />
			<h1>{displayName}</h1>
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
