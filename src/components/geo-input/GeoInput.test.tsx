import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GeoInput from './GeoInput';
import { ERROR_TEXT } from '../constants';

describe('GeoInput', () => {
  const callMock = jest.fn();

  it('should display top label', () => {
    render(<GeoInput />);
    const top = screen.getByText(/top/i);
    expect(top).toBeInTheDocument();
  });
  it('should display bottom label', () => {
    render(<GeoInput />);
    const bottom = screen.getByText(/bottom/i);
    expect(bottom).toBeInTheDocument();
  });
  it('should display right label', () => {
    render(<GeoInput />);
    const right = screen.getByText(/right/i);
    expect(right).toBeInTheDocument();
  });
  it('should display left label', () => {
    render(<GeoInput />);
    const left = screen.getByText(/left/i);
    expect(left).toBeInTheDocument();
  });

  it('should display button', () => {
    render(<GeoInput />);
    const name = screen.getByText(/Show on map/i);
    expect(name).toBeInTheDocument();
  });
  it('should call field validation', () => {
    render(<GeoInput />);
    const input = screen.getByLabelText(/left/i);
    fireEvent.change(input, { target: { value: '123456' } });
    const button = screen.getByText(/Show on map/i);
    fireEvent.click(button);
    expect(ERROR_TEXT).toBeInTheDocument();
  });
});
