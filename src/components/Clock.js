import React, { useState, useEffect } from 'react';
import '../styles/Clock.css';

function Clock(props) {
	const { onMouseOver, onMouseOut, active } = props;

	const [clock, setClock] = useState(new Date());
	const [blink, setBlink] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setClock(new Date());
			setBlink((prev) => !prev);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const timeFormat = (date) => {
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');
		return (
			<>
				{hours}
				<span className={blink ? 'blink' : ''}>:</span>
				{minutes}
				<span className={blink ? 'blink' : ''}>:</span>
				{seconds}
			</>
		);
	};

	const dateFormat = (date) => {
		const day = String(date.getDate()).padStart(2, '0');
		const monthName = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		const month = monthName[date.getMonth()];
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	};

	return (
		<>
			<div
				className={`clock ${active ? 'active' : ''}`}
				data-date={new Date()}
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
			>
				{timeFormat(clock)}
				<span className="date-display">{dateFormat(clock)}</span>
			</div>
			<br />
		</>
	);
}

export default Clock;
