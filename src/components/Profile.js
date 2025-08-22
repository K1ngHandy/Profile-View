import React from 'react';
import Music from './Music.js';
import '../styles/Profile.css';

function Profile(props) {
	const { id, onMouseOver, onMouseOut, onClick, active } = props;

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
				<h4>Currently advancing expertise with: </h4>
				<p>
					Computer Science at{' '}
					<a
						href="https://www.wcupa.edu/"
						target="_blank"
						rel="noopener noreferrer"
					>
						West Chester University of Pennsylvania
					</a>
				</p>
				<p>
					Full Stack Web Development at{' '}
					<a
						href="https://www.bloomtech.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Bloom Institute of Technology
					</a>
				</p>
			</section>
			<Music
				id={id}
				onMouseOver={() => onMouseOver('music')}
				onMouseOut={onMouseOut}
				onClick={onClick}
				active={active === 'music'}
			/>
		</div>
	);
}

export default Profile;
