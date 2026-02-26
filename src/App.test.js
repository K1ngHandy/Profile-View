import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import Clock from './components/Clock';

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
				screen.getByText('API requests exceeded. Return later...'),
			).toBeInTheDocument();
		});
	});
});

describe('Clock component viewport behavior', () => {
	beforeEach(() => {
		// Set a mobile-sized viewport
		window.innerWidth = 375;
		window.innerHeight = 667;
	});

	test('floating clock stays within viewport when dragged', () => {
		const handleOver = jest.fn();
		const handleOut = jest.fn();

		render(
			<Clock
				onMouseOver={handleOver}
				onMouseOut={handleOut}
				active={false}
			/>,
		);

		// Find the clock element via its text (time-like content will exist)
		const clockElement = screen.getByText((content, element) => {
			return element?.classList.contains('clock');
		});

		// Mock dimensions so our bounds calculation has non-zero size
		Object.defineProperty(clockElement, 'offsetWidth', {
			value: 150,
			configurable: true,
		});
		Object.defineProperty(clockElement, 'offsetHeight', {
			value: 80,
			configurable: true,
		});

		// Start a drag near the current position
		fireEvent.mouseDown(clockElement, { clientX: 300, clientY: 500 });

		// Drag far outside the viewport bounds
		fireEvent.mouseMove(window, { clientX: 5000, clientY: 5000 });
		fireEvent.mouseUp(window);

		const top = parseFloat(clockElement.style.top || '0');
		const left = parseFloat(clockElement.style.left || '0');

		// The element should be clamped within the viewport
		expect(top).toBeGreaterThanOrEqual(0);
		expect(left).toBeGreaterThanOrEqual(0);
		expect(top).toBeLessThanOrEqual(
			window.innerHeight - clockElement.offsetHeight,
		);
		expect(left).toBeLessThanOrEqual(
			window.innerWidth - clockElement.offsetWidth,
		);
	});
});
