import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

function Header({ profile, active }) {
	const { username, banner, bannerAlt } = profile;

	return (
		<header className="header">
			<img
				src={banner}
				className="header-banner"
				alt={bannerAlt || 'Header banner'}
			/>
			<h1 className={active === 'profile' ? 'active' : ''}>{username}</h1>
		</header>
	);
}

Header.propTypes = {
	profile: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		username: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		banner: PropTypes.string.isRequired,
		bannerAlt: PropTypes.string,
	}).isRequired,
	active: PropTypes.string,
};

export default Header;
