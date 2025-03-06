import React, { useState } from 'react';
import '../styles/Music.css';
import { username, musicLink } from '../data/linksData';

function Music(props) {
	const { id, onMouseOver, onMouseOut, onClick, active } = props;
	const [showPreview, setShowPreview] = useState(false);
	const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

	const getPreviewUrl = (url) => {
		const apiKey = process.env.REACT_APP_API_KEY;
		return `https://api.screenshotlayer.com/api/capture?access_key=${apiKey}&url=${encodeURIComponent(
			url
		)}&viewport=1440x900&width=400`;
	};

	const handleMouseMove = (e) => {
		setShowPreview(true);
		setPreviewPosition({ x: e.clientX + 15, y: e.clientY + 15 });

		if (onMouseOver) onMouseOver();
	};

	const handleMouseLeave = () => {
		setShowPreview(false);

		if (onMouseOut) onMouseOut();
	};

	return (
		<>
			<div
				id={id}
				className={`music-container ${active ? 'active' : ''}`}
				onMouseOver={() => onMouseOver('music')}
				onMouseMove={handleMouseMove}
				onMouseOut={handleMouseLeave}
				onClick={() => onClick(musicLink.url)}
			>
				<img
					className="music-icon"
					src={musicLink.icon}
					alt={musicLink.alt}
				/>
				<h3>🎶 {musicLink.name}</h3>
			</div>

			{showPreview && (
				<div
					className="music-preview"
					style={{
						position: 'fixed',
						left: `${previewPosition.x}px`,
						top: `${previewPosition.y}px`,
					}}
				>
					<h4>
						{username} - {musicLink.name}
					</h4>
					<img
						src={getPreviewUrl(musicLink.url)}
						alt={`Preview of ${musicLink.name}`}
						className="preview-image"
					/>
					<p>Click to listen</p>
				</div>
			)}
		</>
	);
}
export default Music;
