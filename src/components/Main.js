import React from 'react';
import Profile from './Profile.js';
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
			<section className="main-music">
				<Music
					id={profile.id}
					onMouseOver={() => handleMouseOver('music')}
					onMouseOut={handleMouseOut}
					onClick={handleClick}
					active={active === 'music'}
					username={musicLink?.username}
					icon={musicLink?.icon}
					name={musicLink?.name}
					alt={musicLink?.alt}
					url={musicLink?.url}
				/>
			</section>
		</div>
	);
}

export default Main;
