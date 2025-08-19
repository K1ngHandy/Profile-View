import React from 'react';
import Music from './Music.js';
import '../styles/Profile.css';

function Profile(props) {
	const { id, onMouseOver, onMouseOut, onClick, active } = props;

	return (
		<div className="profile-container">
			<div className="profile-content">
				<h1>My name is Steve Handy.</h1>
				<p>
					Full Stack web developer with a solid foundation in Git,
					HTML, CSS, JavaScript, Python, React, Swift, Node.js,
					Material UI, and other modern UI frameworks.
					<p>
						Currently advancing expertise on my coding journey with:{' '}
						<br />
						<br /> Computer Science at{' '}
						<a
							href="https://www.wcupa.edu/"
							target="_blank"
							rel="noopener noreferrer"
						>
							West Chester University of Pennsylvania <br />
						</a>
						Full Stack Web Development at{' '}
						<a
							href="https://www.bloomtech.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Bloom Institute of Technology
						</a>
					</p>
				</p>
			</div>
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
