import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Music.css';

function Music({
	id,
	onMouseOver,
	onMouseOut,
	onFocus,
	onClick,
	active,
	username,
	icon,
	name,
	alt,
	url,
}) {
	const [showPreview, setShowPreview] = useState(false);
	const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
	const [previewError, setPreviewError] = useState(false);

	const getPreviewUrl = (url) => {
		const apiKey = process.env.REACT_APP_API_KEY;
		return `https://api.screenshotlayer.com/api/capture?access_key=${apiKey}&url=${encodeURIComponent(
			url,
		)}&viewport=1440x900&width=400`;
	};

	const handleMouseMove = (e) => {
		setPreviewPosition({ x: e.clientX + 15, y: e.clientY + 15 });
	};

	const handleMouseEnter = () => {
		setShowPreview(true);

		if (onMouseOver) onMouseOver('music');
	};

	const handleMouseLeave = () => {
		setShowPreview(false);

		if (onMouseOut) onMouseOut();
	};

	const handleFocus = (event) => {
		if (onFocus) onFocus(event);

		if (onMouseOver) onMouseOver('music');
	};

	const handleActivate = () => {
		if (onClick) onClick(url);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleActivate();
		}
	};

	const handleImageError = () => {
		setPreviewError(true);
	};

	return (
		<>
			<button
				id={id}
				type="button"
				className={`music-container ${active ? 'active' : ''}`}
				onMouseEnter={handleMouseEnter}
				onFocus={handleFocus}
				onBlur={handleMouseLeave}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				onClick={handleActivate}
				onKeyDown={handleKeyDown}
				aria-label={name ? `Play ${name}` : 'Play music'}
			>
				<img
					className="music-icon"
					src={icon}
					alt={alt || 'Music icon'}
				/>
				<h3>🎶{name}</h3>
			</button>

			{showPreview && (
				<section
					id={id ? `${id}-preview` : undefined}
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
							alt={alt || 'Music icon'}
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

Music.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onMouseOver: PropTypes.func,
	onMouseOut: PropTypes.func,
	onFocus: PropTypes.func,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	username: PropTypes.string,
	icon: PropTypes.string,
	name: PropTypes.string,
	alt: PropTypes.string,
	url: PropTypes.string,
};

export default Music;
