import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Geo Box header', () => {
  render(<App />);
  const text = screen.getByText(/Geo Box/i);
  expect(text).toBeInTheDocument();
});
