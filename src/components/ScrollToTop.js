import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css';

function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (!visible) return null;

	return (
		<button
			className="scroll-to-top"
			onClick={scrollToTop}
			aria-label="Scroll to top"
		>
			&#8679;
		</button>
	);
}

export default ScrollToTop;
