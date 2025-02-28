import React, { useState } from 'react';
import GridContainer from './GridContainer.js';
import Clock from './Clock.js';
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

	return (
		<div className="main-container">
			<Clock
				className="clock"
				id="clock"
				data-date={formattedDate}
				mouseOver={() => handleMouseOver('clock')}
				mouseOut={handleMouseOut}
				active={active === 'clock'}
			/>
			<GridContainer
				mouseOver={handleMouseOver}
				mouseOut={handleMouseOut}
				active={active}
			/>
		</div>
	);
}

export default Main;
