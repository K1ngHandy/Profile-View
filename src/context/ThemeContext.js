import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const getCurrentTheme = () => {
		return window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	};

	const [theme, setTheme] = useState(getCurrentTheme());
	useEffect(() => {
		document.body.className = `${theme}-mode`;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => {
			const newTheme = mediaQuery.matches ? 'dark' : 'light';
			setTheme(newTheme);
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
