import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollToTop.js';
import { ThemeProvider } from './context/ThemeContext.js';
import linksData, { profile } from './data/linksData.js';
import './styles/App.css';

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [active, setActive] = useState(false);

	const { username } = profile;

	// Gravatar integration
	const gravatar = `https://api.gravatar.com/v3/profiles/${username}`;
	const handleMouseOver = (id) => setActive(id);
	const handleMouseOut = () => setActive(null);

	// Footer visibility
	const [footerVisible, setFooterVisible] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(gravatar);
				setData(res.data);
				setLoading(false);
			} catch (err) {
				console.error('Error fetching gravatar profile', err);
				setError('API requests exceeded. Return later...');
				setLoading(false);
			}
		};
		fetchData();
	}, [gravatar]);

	useEffect(() => {
		const scrollThreshold = window.scrollY;
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY <= 5) {
				setFooterVisible(false);
			} else if (
				Math.abs(currentScrollY - lastScrollY) > scrollThreshold
			) {
				setFooterVisible(currentScrollY > lastScrollY);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div className="error">{error}</div>;

	return (
		<ThemeProvider>
			<div className={`App ${footerVisible ? 'footer-visible' : ''}`}>
				<Header
					profile={profile}
					data={data}
					active={active}
					setActive={setActive}
				/>
				<Main
					profile={profile}
					linksData={linksData}
					active={active}
					setActive={setActive}
				/>
				<Footer
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					active={active}
					visible={footerVisible}
				/>
				<SpeedInsights />
				<ScrollToTop />
			</div>
		</ThemeProvider>
	);
}

export default App;
