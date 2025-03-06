import React from 'react';
import '../styles/GridContainer.css';
import GridItem from './GridItem';
import linksData from '../data/linksData';

function GridContainer(props) {
	const { mouseOver, mouseOut, onClick, active } = props;

	return (
		<div className="grid-container">
			{linksData.slice(0, 9).map((link, idx) => {
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
					/>
				);
			})}
		</div>
	);
}

export default GridContainer;
