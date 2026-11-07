import React from "react";
import GridItem from "./GridItem.js";
import "../styles/Profile.css";

function Profile(props) {
	const { wcupa, bloom, leftGridItems, rightGridItems } = props;

	return (
		<div className="profile">
			<aside className="left">
				{leftGridItems.map((item, idx) => (
					<GridItem
						key={idx}
						{...item}
					/>
				))}
			</aside>
			<section className="profile-section">
				<section className="profile-intro">
					<p>
						Full Stack web developer with a solid foundation in Git,
						HTML, CSS, Java, JavaScript, Python, React, Swift,
						Node.js, Material UI, and other modern UI frameworks.
					</p>
				</section>
				<section className="profile-education">
					<h3>Currently advancing expertise with:</h3>
					<section className="education-row">
						<div className="education-section">
							<h4>Computer Science at</h4>
							<a
								href={wcupa?.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={wcupa?.icon}
									id="wcupa-icon"
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
									id="bloom-icon"
									alt={bloom?.alt}
								/>
							</a>
						</div>
					</section>
				</section>
			</section>
			<aside className="right">
				{rightGridItems.map((item, idx) => (
					<GridItem
						key={idx}
						{...item}
					/>
				))}
			</aside>
		</div>
	);
}

export default Profile;
