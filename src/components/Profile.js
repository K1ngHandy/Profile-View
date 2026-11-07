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
				<section className="intro">
					<h3>Computer Science major</h3>
					<p>
						Full Stack web and data science developer with a solid
						foundation in Git, HTML, CSS, Java, JavaScript, Python,
						React, Swift, Node.js, Material UI, and other modern UI
						frameworks.
					</p>
				</section>
				<section className="education">
					<h3>Education:</h3>
					<section className="schools">
						<a
							className="school"
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
						<a
							className="school"
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
