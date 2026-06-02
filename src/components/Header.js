import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

function Header({ profile, active, setActive }) {
	const { username, logo, alt } = profile;

	const handleLogoClick = () => {
		console.log('Logo Clicked');
	};

	return (
		<header className="header">
			<button
				className="header-logo-btn"
				onClick={handleLogoClick}
				onMouseOver={() => setActive('profile')}
				onMouseOut={() => setActive(null)}
				aria-label={`${alt || 'App logo'} - Click for profile`}
			>
				<img
					src={logo}
					className="app-logo bounce"
					alt={alt}
				/>
			</button>
			<h1 className={active === 'profile' ? 'active' : ''}>{username}</h1>
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
