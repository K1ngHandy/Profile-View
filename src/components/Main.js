import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile.js';
import Divider from './Divider.js';
import Music from './Music.js';
import '../styles/Main.css';

function Main({ profile, linksData, active, setActive }) {
	const handleMouseOver = (id) => setActive(id);
	const handleMouseOut = () => setActive(null);
	const handleClick = (url) =>
		window.open(url, '_blank', 'noopener,noreferrer');

	const musicLink = linksData.find((link) => link.id === 'music');
	const wcupaLink = linksData.find((link) => link.id === 'wcupa');
	const bloomLink = linksData.find((link) => link.id === 'bloom');

	const leftGridItems = linksData.slice(1, 5).map((link, idx) => ({
		id: `button-${idx}`,
		active: active === `button-${idx}`,
		onClick: () => handleClick(link.url),
		onMouseOver: () => handleMouseOver(`button-${idx}`),
		onMouseOut: handleMouseOut,
		title: link.name,
		icon: link.icon,
		name: link.name,
		alt: link.alt,
	}));

	const rightGridItems = linksData.slice(5, 9).map((link, idx) => ({
		id: `button-${idx + 4}`,
		active: active === `button-${idx + 4}`,
		onClick: () => handleClick(link.url),
		onMouseOver: () => handleMouseOver(`button-${idx + 4}`),
		onMouseOut: handleMouseOut,
		title: link.name,
		icon: link.icon,
		name: link.name,
		alt: link.alt,
	}));

	return (
		<div className="main-container">
			<div className="main-profile-title">
				<h2>Steve Handy</h2>
				<button
					type="button"
					className="main-location"
					id={profile.id || undefined}
					style={{ cursor: 'pointer' }}
					onClick={() =>
						window.open(
							`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
								profile.location,
							)}`,
							'_blank',
							'noopener,noreferrer',
						)
					}
				>
					🧭 {profile.location}
				</button>
			</div>
			<Divider />
			<Profile
				id={profile.id}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onClick={handleClick}
				active={active}
				username={profile.username}
				wcupa={wcupaLink}
				bloom={bloomLink}
				music={musicLink}
				leftGridItems={leftGridItems}
				rightGridItems={rightGridItems}
			/>
			<Divider />
			<section className="main-music">
				<Music
					id={profile.id}
					onMouseOver={() => handleMouseOver('music')}
					onMouseOut={handleMouseOut}
					onClick={handleClick}
					active={active === 'music'}
					username={profile.username}
					icon={musicLink?.icon}
					name={musicLink?.name}
					alt={musicLink?.alt}
					url={musicLink?.url}
				/>
				<div className="main-bottom-spacer" />
			</section>
			<section className="section-spacer" />
		</div>
	);
}

export default Main;

Main.propTypes = {
	profile: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		username: PropTypes.string,
		location: PropTypes.string,
	}).isRequired,
	linksData: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			icon: PropTypes.string,
			alt: PropTypes.string,
			url: PropTypes.string,
			username: PropTypes.string,
		}),
	).isRequired,
	active: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	setActive: PropTypes.func.isRequired,
};
