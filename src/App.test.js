// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreNook title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreNook/i);
    expect(titleElement).toBeInTheDocument();
});
