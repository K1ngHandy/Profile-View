import React from 'react';
import '../styles/GridItem.css';

function GridItem(props) {
	const { id, active, onClick, onMouseOver, onMouseOut, onFocus, title, icon, name, alt } =
		props;

	return (
		<button
			id={id}
			className={`grid-item ${active ? 'active' : ''}`}
			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			onFocus={onFocus || onMouseOver}
			onBlur={onMouseOut}
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
