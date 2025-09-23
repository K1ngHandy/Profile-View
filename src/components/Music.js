import React, { useState } from 'react';
import '../styles/Music.css';

function Music(props) {
	const {
		id,
		onMouseOver,
		onMouseOut,
		onClick,
		active,
		username,
		icon,
		name,
		alt,
		url,
	} = props;
	const [showPreview, setShowPreview] = useState(false);
	const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
	const [previewError, setPreviewError] = useState(false);

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

	const handleImageError = () => {
		setPreviewError(true);
	};

	return (
		<>
			<section
				id={id}
				className={`music-container ${active ? 'active' : ''}`}
				onMouseOver={() => onMouseOver('music')}
				onMouseMove={handleMouseMove}
				onMouseOut={handleMouseLeave}
				onClick={() => onClick(url)}
			>
				<img
					id={id === 'music'}
					className="music-icon"
					src={icon}
					alt={alt}
				/>
				<h3>🎶{name}</h3>
			</section>

			{showPreview && (
				<section
					id={id === 'music'}
					className="music-preview"
					style={{
						position: 'fixed',
						left: `${previewPosition.x}px`,
						top: `${previewPosition.y}px`,
					}}
				>
					<p>Click to listen:</p>
					<h4>
						{username} - {name}
					</h4>
					{previewError ? (
						<img
							src={icon}
							alt={alt}
							className="preview-image fallback"
						/>
					) : (
						<img
							src={getPreviewUrl(url)}
							alt={`Preview of ${name}`}
							className="preview-image"
							onError={handleImageError}
						/>
					)}
				</section>
			)}
		</>
	);
}
export default Music;
