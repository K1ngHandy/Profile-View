import React from 'react';
import Music from './Music.js';
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
	} = props;

	return (
		<div className="profile-container">
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
			<section className="profile-music">
				<h3>Music Development:</h3>
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
		</div>
	);
}

export default Profile;
