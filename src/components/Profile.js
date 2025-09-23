import React from 'react';
import Music from './Music.js';
import GridItem from './GridItem.js';
import '../styles/Profile.css';

function Profile(props) {
	const {
		id,
		onMouseOver,
		onMouseOut,
		onClick,
		active,
		wcupa,
		bloom,
		music,
		leftGridItems,
		rightGridItems,
	} = props;

	return (
		<div className="profile-container-grid">
			<div className="profile-grid-column left">
				{leftGridItems.map((item, idx) => (
					<GridItem
						key={idx}
						{...item}
					/>
				))}
			</div>
			<div className="profile-main-content">
				<section className="profile-music">
					<Music
						id={id}
						onMouseOver={() => onMouseOver('music')}
						onMouseOut={onMouseOut}
						onClick={onClick}
						active={active === 'music'}
						username={music?.username}
						icon={music?.icon}
						name={music?.name}
						alt={music?.alt}
						url={music?.url}
					/>
				</section>
				<section className="profile profile-intro">
					<h2>My name is Steve Handy.</h2>
					<p>
						Full Stack web developer with a solid foundation in Git,
						HTML, CSS, JavaScript, Python, React, Swift, Node.js,
						Material UI, and other modern UI frameworks.
					</p>
				</section>
				<section className="profile profile-education">
					<h3>Currently advancing expertise with:</h3>
					<div className="education-row">
						<div className="education-section">
							<h4>Computer Science at</h4>
							<a
								href={wcupa?.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={wcupa?.icon}
									className="wcupa-icon"
									alt={wcupa?.alt}
								/>
							</a>
						</div>
						<div className="education-section">
							<h4>Full Stack Web Development at</h4>
							<a
								href="https://www.bloomtech.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={bloom?.icon}
									className="bloom-icon"
									alt={bloom?.alt}
								/>
							</a>
						</div>
					</div>
				</section>
			</div>
			<div className="profile-grid-column right">
				{rightGridItems.map((item, idx) => (
					<GridItem
						key={idx}
						{...item}
					/>
				))}
			</div>
		</div>
	);
}

export default Profile;
