import React from 'react';
import '../styles/Header.css';

function Header({ profile, active, setActive }) {
	const { id, username, location, logo, alt } = profile;

	return (
		<header className="header">
			<hr className="divider" />
			<img
				src={logo}
				className="app-logo bounce"
				alt={alt}
				onMouseDown={() => setActive('profile')}
				onMouseOut={() => setActive(null)}
			/>
			<div className="username-container">
				<h1
					className={active === 'profile' ? 'active' : ''}
					onMouseOver={() => setActive('profile')}
					onMouseOut={() => setActive(null)}
				>
					{username}
				</h1>
			</div>
			<p
				className="location"
				id={id ? id : undefined}
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
		</header>
	);
}

export default Header;
