module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'/node_modules/(?!(@vercel/speed-insights|@vercel/analytics)/)',
	],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	moduleDirectories: ['node_modules', 'src'],
};
