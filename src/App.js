import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { ThemeProvider } from './context/ThemeContext.js';
import linksData, { profile } from './data/linksData.js';
import './styles/App.css';

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const { id: profileId, username, location, logo, alt: logoAlt } = profile;
	const { id, icon, name, alt, url } = linksData;

	const gravatar = `https://api.gravatar.com/v3/profiles/${username}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(gravatar);
				setData(res.data);
				setLoading(false);
			} catch (err) {
				// setData([]);
				setError('API requests exceeded. Return later...');
				setLoading(false);
			}
		};
		fetchData();
	}, [gravatar]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div className="error">{error}</div>;

	return (
		<ThemeProvider>
			<div className="App">
				<Header
					profile={profile}
					data={data}
				/>
				<Main
					profile={profile}
					linksData={linksData}
				/>
				<SpeedInsights />
			</div>
		</ThemeProvider>
	);
}

export default App;
