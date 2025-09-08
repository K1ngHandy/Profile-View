import React, { useState } from 'react';
import GridContainer from './GridContainer.js';
import Clock from './Clock.js';
import Profile from './Profile.js';
import Footer from './Footer.js';
import '../styles/Main.css';

function Main({ profile, linksData }) {
	const [active, setActive] = useState(false);

	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString();

	const handleMouseOver = (id) => setActive(id);
	const handleMouseOut = () => setActive(null);
	const handleClick = (url) => window.open(url, '_blank');

	const musicLink = linksData.find((link) => link.id === 'music');
	const wcupaLink = linksData.find((link) => link.id === 'wcupa');
	const bloomLink = linksData.find((link) => link.id === 'bloom');

	return (
		<div className="main-container">
			<Clock
				className="clock"
				id="clock"
				data-date={formattedDate}
				onMouseOver={() => handleMouseOver('clock')}
				onMouseOut={handleMouseOut}
				active={active === 'clock'}
			/>
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
			/>
			<GridContainer
				linksData={linksData}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onClick={handleClick}
				active={active}
			/>
			<Footer
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onClick={handleClick}
				active={active}
			/>
		</div>
	);
}

export default Main;
