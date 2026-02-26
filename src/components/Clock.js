/* global globalThis */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/Clock.css';

function Clock(props) {
	const { onMouseOver, onMouseOut, active } = props;

	const [clock, setClock] = useState(new Date());
	const [blink, setBlink] = useState(true);
	const clockRef = useRef(null);
	const [isFloating, setIsFloating] = useState(false);
	const [position, setPosition] = useState({ top: null, left: null });
	const [isDragging, setIsDragging] = useState(false);
	const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
	const [hiddenOnScroll, setHiddenOnScroll] = useState(false);
	const [isClosed, setIsClosed] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setClock(new Date());
			setBlink((prev) => !prev);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	// Decide when the clock should float (small screens)
	useEffect(() => {
		const updateFloating = () => {
			const shouldFloat = globalThis.innerWidth <= 768;
			setIsFloating(shouldFloat);
			if (shouldFloat) {
				setPosition((prev) => {
					if (prev.top !== null && prev.left !== null) return prev;
					return {
						top: globalThis.innerHeight - 120,
						left: globalThis.innerWidth - 220,
					};
				});
			}
		};

		updateFloating();
		globalThis.addEventListener('resize', updateFloating);
		return () => globalThis.removeEventListener('resize', updateFloating);
	}, []);

	// Hide while scrolling, reappear when scrolling stops (mobile floating only)
	useEffect(() => {
		if (!isFloating) return;
		let timeoutId;
		const handleScroll = () => {
			setHiddenOnScroll(true);
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setHiddenOnScroll(false);
			}, 250);
		};
		globalThis.addEventListener('scroll', handleScroll);
		return () => {
			globalThis.removeEventListener('scroll', handleScroll);
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [isFloating]);

	// Drag handling for floating clock (mouse + touch)
	useEffect(() => {
		if (!isDragging || !isFloating) return;

		const handleMove = (event) => {
			let clientX;
			let clientY;
			if (event.touches?.[0]) {
				clientX = event.touches[0].clientX;
				clientY = event.touches[0].clientY;
			} else {
				clientX = event.clientX;
				clientY = event.clientY;
			}

			const node = clockRef.current;
			const elementWidth = node?.offsetWidth ?? 0;
			const elementHeight = node?.offsetHeight ?? 0;
			const maxLeft = Math.max(globalThis.innerWidth - elementWidth, 0);
			const maxTop = Math.max(globalThis.innerHeight - elementHeight, 0);

			let nextLeft = clientX - dragOffset.x;
			let nextTop = clientY - dragOffset.y;

			if (nextLeft < 0) nextLeft = 0;
			if (nextTop < 0) nextTop = 0;
			if (nextLeft > maxLeft) nextLeft = maxLeft;
			if (nextTop > maxTop) nextTop = maxTop;

			setPosition({
				top: nextTop,
				left: nextLeft,
			});
		};

		const handleUp = () => {
			setIsDragging(false);
		};

		globalThis.addEventListener('mousemove', handleMove);
		globalThis.addEventListener('mouseup', handleUp);
		globalThis.addEventListener('touchmove', handleMove, {
			passive: false,
		});
		globalThis.addEventListener('touchend', handleUp);

		return () => {
			globalThis.removeEventListener('mousemove', handleMove);
			globalThis.removeEventListener('mouseup', handleUp);
			globalThis.removeEventListener('touchmove', handleMove);
			globalThis.removeEventListener('touchend', handleUp);
		};
	}, [isDragging, dragOffset, isFloating]);

	const timeFormat = (date) => {
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');
		return (
			<>
				{hours}
				<span className={blink ? 'blink' : ''}>:</span>
				{minutes}
				<span className={blink ? 'blink' : ''}>:</span>
				{seconds}
			</>
		);
	};

	const dateFormat = (date) => {
		const day = String(date.getDate()).padStart(2, '0');
		const monthName = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		const month = monthName[date.getMonth()];
		const year = date.getFullYear();
		return `${day} ${month} ${year}`;
	};

	const handleDragStart = (event) => {
		if (!isFloating || isClosed) return;
		const target = event.target;
		if (target?.closest?.('.clock-close')) {
			return;
		}
		let clientX;
		let clientY;
		if (event.touches?.[0]) {
			clientX = event.touches[0].clientX;
			clientY = event.touches[0].clientY;
		} else {
			clientX = event.clientX;
			clientY = event.clientY;
		}
		setIsDragging(true);
		setDragOffset({
			x: clientX - (position.left ?? 0),
			y: clientY - (position.top ?? 0),
		});
	};

	const handleClose = (event) => {
		if (event) {
			event.stopPropagation();
			event.preventDefault();
		}
		setIsClosed(true);
	};

	if (isClosed) {
		return null;
	}

	const isHidden = isFloating && hiddenOnScroll;
	const floatingStyle =
		isFloating && position.top !== null && position.left !== null
			? { top: position.top, left: position.left }
			: {};

	return (
		<>
			<button
				type="button"
				className={`clock ${active ? 'active' : ''} ${
					isFloating ? 'clock-floating' : ''
				} ${isHidden ? 'clock-hidden' : ''}`}
				ref={clockRef}
				style={floatingStyle}
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
				onFocus={onMouseOver}
				onBlur={onMouseOut}
				onMouseDown={handleDragStart}
				onTouchStart={handleDragStart}
			>
				<button
					className="clock-close"
					onClick={handleClose}
					aria-label="Close clock"
				>
					×
				</button>
				{timeFormat(clock)}
				<span className="date-display">{dateFormat(clock)}</span>
			</button>
			<br />
		</>
	);
}

Clock.propTypes = {
	onMouseOver: PropTypes.func,
	onMouseOut: PropTypes.func,
	active: PropTypes.bool,
};

export default Clock;
