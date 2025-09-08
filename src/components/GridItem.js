import React from 'react';
import '../styles/GridItem.css';

function GridItem(props) {
	const { id, active, onClick, mouseOver, mouseOut, title, icon, name, alt } =
		props;

	return (
		<button
			id={id}
			className={`grid-item ${active ? 'active' : ''}`}
			onClick={onClick}
			onMouseOver={mouseOver}
			onMouseOut={mouseOut}
			title={title}
		>
			<img
				src={icon}
				alt={alt}
				className="icons"
			/>
			<span className="active-text">{name}</span>
		</button>
	);
}

export default GridItem;
