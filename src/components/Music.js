import React, { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../styles/Music.css";

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
	const [previewImageLoaded, setPreviewImageLoaded] = useState(false);
	const previewRef = useRef(null);

	const getPreviewUrl = (url) => {
		const apiKey = process.env.REACT_APP_API_KEY;
		return `https://api.screenshotlayer.com/api/capture?access_key=${apiKey}&url=${encodeURIComponent(
			url,
		)}&viewport=1440x900&width=400`;
	};

	const handleMouseMove = (e) => {
		setPreviewPosition({ x: e.clientX, y: e.clientY });
	};

	useLayoutEffect(() => {
		if (!showPreview || !previewRef.current) return;

		const { height, width } = previewRef.current.getBoundingClientRect();
		const edgeOffset = 15;
		const viewportHeight = window.innerHeight;
		const viewportWidth = window.innerWidth;
		const shouldPlaceAbove =
			previewPosition.y + edgeOffset + height > viewportHeight;
		const top = shouldPlaceAbove
			? previewPosition.y - height
			: previewPosition.y + edgeOffset;
		const left = Math.min(
			previewPosition.x + edgeOffset,
			viewportWidth - width,
		);

		previewRef.current.style.top = `${Math.max(
			0,
			Math.min(top, viewportHeight - height),
		)}px`;
		previewRef.current.style.left = `${Math.max(0, left)}px`;
	}, [previewImageLoaded, previewPosition, previewError, showPreview]);

	const handleMouseEnter = () => {
		setShowPreview(true);

		if (onMouseOver) onMouseOver("music");
	};

	const handleMouseLeave = () => {
		setShowPreview(false);

		if (onMouseOut) onMouseOut();
	};

	const handleFocus = (event) => {
		if (onFocus) onFocus(event);

		if (onMouseOver) onMouseOver("music");
	};

	const handleActivate = () => {
		if (onClick) onClick(url);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleActivate();
		}
	};

	const handleImageError = () => {
		setPreviewError(true);
		setPreviewImageLoaded(false);
	};

	const handleImageLoad = () => {
		setPreviewImageLoaded(true);
	};

	return (
		<div className="music">
			<button
				id={id}
				type="button"
				className={`button ${active ? "active" : ""}`}
				onMouseEnter={handleMouseEnter}
				onFocus={handleFocus}
				onBlur={handleMouseLeave}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				onClick={handleActivate}
				onKeyDown={handleKeyDown}
				aria-label={name ? `Play ${name}` : "Play music"}
			>
				<img
					className="music-icon"
					src={icon}
					alt={alt || "Music icon"}
				/>
				<h3>🎶{name}</h3>
			</button>

			{showPreview && (
				<section
					id={id ? `${id}-preview` : undefined}
					className="music-preview"
					ref={previewRef}
					style={{
						position: "fixed",
						left: 0,
						top: 0,
					}}
				>
					<p>Click to listen:</p>
					<h4>
						{username} - {name}
					</h4>
					{previewError ? (
						<img
							src={icon}
							alt={alt || "Music icon"}
							className="preview-image fallback"
							onLoad={handleImageLoad}
						/>
					) : (
						<img
							src={getPreviewUrl(url)}
							alt={`Preview of ${name}`}
							className="preview-image"
							onLoad={handleImageLoad}
							onError={handleImageError}
						/>
					)}
				</section>
			)}
		</div>
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
