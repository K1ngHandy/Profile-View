import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Title.css';

function Title({ id, location }) {
	const handleLocationClick = () =>
		window.open(
			`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
				location,
			)}`,
			'_blank',
			'noopener,noreferrer',
		);

	return (
		<div className="title">
			<h2>Steve Handy</h2>
			<button
				type="button"
				className="location"
				id={id || undefined}
				style={{ cursor: 'pointer' }}
				onClick={handleLocationClick}
			>
				🧭 {location}
			</button>
		</div>
	);
}

Title.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	location: PropTypes.string.isRequired,
};

export default Title;
