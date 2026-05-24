import React from 'react';
import GridItem from './GridItem.js';
import '../styles/Profile.css';

function Profile(props) {
	const { wcupa, bloom, leftGridItems, rightGridItems } = props;

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
				<section className="profile profile-intro">
					<p>
						Full Stack web developer with a solid foundation in Git,
						HTML, CSS, Java, JavaScript, Python, React, Swift,
						Node.js, Material UI, and other modern UI frameworks.
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
