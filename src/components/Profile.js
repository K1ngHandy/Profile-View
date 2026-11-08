import React from "react";
import GridItem from "./GridItem.js";
import "../styles/Profile.css";

function Profile(props) {
	const { wcupa, bloom, auto, leftGridItems, rightGridItems } = props;

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
					<h3>Computer Science Major</h3>
					<p>
						Full Stack web and data science developer with a solid
						foundation in Git, HTML, CSS, Java, JavaScript, Python,
						React, Swift, Node.js, Material UI, and other modern UI
						frameworks.
					</p>
					<h3>Advanced Automotive Training</h3>
					<p>
						Professional Automotive Technician training with hands-on expertise in diagnostics, repair, and maintenance of various vehicle systems. Skilled in using advanced diagnostic tools and equipment to identify and resolve complex automotive issues.
					</p>
				</section>
				<section className="education">
					<h3>Education:</h3>
					<section className="schools">
						<a
							className="school icon"
							href="https://autotraining.edu/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={auto?.icon}
								id="auto-icon"
								alt={auto?.alt}
							/>
						</a>
						<a
							className="school icon"
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
						<a
							className="school icon"
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
