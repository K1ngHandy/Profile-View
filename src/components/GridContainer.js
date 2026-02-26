import React from 'react';
import '../styles/GridContainer.css';
import GridItem from './GridItem';

function GridContainer(props) {
	// deprecated
	const { linksData, mouseOver, mouseOut, onClick, active } = props;

	return (
		<div className="grid-container">
			{linksData.slice(1, 9).map((link, idx) => {
				const id = `button-${idx}`;

				return (
					<GridItem
						key={idx}
						id={id}
						active={active === id}
						onClick={() => onClick(link.url)}
						onMouseOver={() => mouseOver(id)}
						onMouseOut={mouseOut}
						title={link.name}
						icon={link.icon}
						name={link.name}
						alt={link.alt}
					/>
				);
			})}
		</div>
	);
}

export default GridContainer;
