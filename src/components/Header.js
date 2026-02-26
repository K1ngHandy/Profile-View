import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

function Header({ profile, active, setActive }) {
	const { id, username, location, logo, alt } = profile;

	return (
		<header className="header">
			<hr className="divider" />
			<button
				type="button"
				className="logo-button"
				onMouseDown={() => setActive('profile')}
				onMouseOut={() => setActive(null)}
				onBlur={() => setActive(null)}
				style={{ padding: 0, border: 'none', background: 'none' }}
			>
				<img
					src={logo}
					className="app-logo bounce"
					alt={alt}
				/>
			</button>
			<div className="username-container">
				<h1
					className={active === 'profile' ? 'active' : ''}
					onMouseOver={() => setActive('profile')}
					onMouseOut={() => setActive(null)}
					onFocus={() => setActive('profile')}
					onBlur={() => setActive(null)}
				>
					{username}
				</h1>
			</div>
			<button
				type="button"
				className="location"
				id={id || undefined}
				style={{ cursor: 'pointer' }}
				onClick={() =>
					window.open(
						`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
							location,
						)}`,
						'_blank',
						'noopener,noreferrer',
					)
				}
			>
				🧭 {location}
			</button>
		</header>
	);
}

Header.propTypes = {
	profile: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		username: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		logo: PropTypes.string.isRequired,
		alt: PropTypes.string,
	}).isRequired,
	active: PropTypes.string,
	setActive: PropTypes.func.isRequired,
};

export default Header;
