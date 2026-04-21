import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

// Mock data
const mockProfileData = {
	name: 'Test User',
};

// Mock axios module
jest.mock('axios', () => ({
	get: jest.fn(),
}));

jest.mock(
	'@vercel/speed-insights/react',
	() => ({
		SpeedInsights: function MockSpeedInsights() {
			return null;
		},
	}),
	{ virtual: true }
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

	test('renders initial loading state', async () => {
		axios.get.mockImplementation(() => new Promise(() => {}));

		render(<App />);

		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	test('renders buttons when load is successful', async () => {
		axios.get.mockResolvedValue({ data: mockProfileData });

		render(<App />);

		await waitFor(() => {
			expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
		});

		expect(screen.getAllByRole('button')[0]).toBeInTheDocument();
	});

	test('renders error message when API fails', async () => {
		axios.get.mockRejectedValue(new Error('API Error'));

		render(<App />);

		await waitFor(() => {
			expect(
				screen.getByText('API requests exceeded. Return later...')
			).toBeInTheDocument();
		});
	});
});
