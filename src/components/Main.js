import React, { useState } from 'react';
import GridContainer from './GridContainer.js';
import Clock from './Clock.js';
import Music from './Music.js';
import Footer from './Footer.js';
import '../styles/Main.css';

function Main() {
	const [active, setActive] = useState(false);

	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleDateString();

	const handleMouseOver = (id) => {
		setActive(id);
	};

	const handleMouseOut = () => {
		setActive(null);
	};

	const handleClick = (url) => {
		window.open(url, '_blank');
	};

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
			<br />
			<Music
				id="music"
				onMouseOver={() => handleMouseOver('music')}
				onMouseOut={handleMouseOut}
				onClick={handleClick}
				active={active === 'music'}
			/>
			<br />
			<GridContainer
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
