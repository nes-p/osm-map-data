import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import GeoContainer from './GeoContainer';
import { ERROR_TEXT } from '../../lib/constants';

describe('GeoContainer', () => {
  it('should call field validation', () => {
    const { container } = render(<GeoContainer />);
    const input = screen.getByLabelText(/left/i);
    act(() => {
      fireEvent.change(input, { target: { value: '123456' } });
    });
    const button = screen.getByText(/Show on map/i);
    act(() => {
      fireEvent.click(button);
    });
    const error = container.getElementsByClassName('error-text-box');
    const errorTextBox = screen.getByTestId('error-text-box');
    expect(error.length).toBe(1);
    expect(errorTextBox).toHaveTextContent(ERROR_TEXT);
  });
});
