import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App tests', () => {
    it('should contain Yooo', () => {
    render(<App />);
        const heading = screen.getByText(/Yooo/i);
        expect(heading).toBeInTheDocument()
    });
});