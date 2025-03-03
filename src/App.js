import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { ThemeProvider } from './context/ThemeContext.js';
import { username } from './data/linksData.js';

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const url = `https://api.gravatar.com/v3/profiles/${username}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(url);
				setData(res.data);
				setLoading(false);
			} catch (err) {
				setError('Error fetching data.');
				setLoading(false);
			}
		};
		fetchData();
	}, [url]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<ThemeProvider>
			<div className="App">
				<Header data={data} />
				<Main />
			</div>
		</ThemeProvider>
	);
}

export default App;
