import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Gravatar API test data and Axios mock retained for reference while the
// integration is disabled.
// import axios from 'axios';
// const mockProfileData = { name: 'Test User' };
// jest.mock('axios', () => ({
// 	get: jest.fn(),
// }));

jest.mock(
	'@vercel/speed-insights/react',
	() => ({
		SpeedInsights: function MockSpeedInsights() {
			return null;
		},
	}),
	{ virtual: true },
);

describe('App component', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		// Mock window.matchMedia
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // deprecated
				removeListener: jest.fn(), // deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});

	test('renders the profile without the disabled Gravatar request', () => {
		render(<App />);

		expect(screen.getAllByRole('button')[0]).toBeInTheDocument();
	});

	// These tests belonged to the disabled Gravatar request and are retained
	// here as documentation for any future re-enablement.
	// test('renders initial loading state', async () => {
	// 	axios.get.mockImplementation(() => new Promise(() => {}));
	// 	render(<App />);
	// 	expect(screen.getByText('Loading...')).toBeInTheDocument();
	// });
	// test('renders buttons when load is successful', async () => {
	// 	axios.get.mockResolvedValue({ data: mockProfileData });
	// 	render(<App />);
	// 	await waitFor(() => {
	// 		expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
	// 	});
	// 	expect(screen.getAllByRole('button')[0]).toBeInTheDocument();
	// });
	// test('renders error message when API fails', async () => {
	// 	axios.get.mockRejectedValue(new Error('API Error'));
	// 	render(<App />);
	// 	await waitFor(() => {
	// 		expect(
	// 			screen.getByText('API requests exceeded. Return later...')
	// 		).toBeInTheDocument();
	// 	});
	// });
});
