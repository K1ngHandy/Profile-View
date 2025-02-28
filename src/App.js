import React from 'react';
import './styles/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { ThemeProvider } from './context/ThemeContext.js';

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<Header />
				<Main />
			</div>
		</ThemeProvider>
	);
}

export default App;
