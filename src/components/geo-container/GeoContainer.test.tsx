import React, { FC } from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import GeoContainer from './GeoContainer';
import { ERROR_TEXT } from '../constants';
import coordinates from '../../mocks/coordinates.json';

describe('GeoContainer', () => {
  const callMock = jest.fn();
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
    const error = container.getElementsByClassName('error');
    const errorTextBox = screen.getByTestId('error-text-box');
    expect(error.length).toBe(1);
    expect(errorTextBox).toHaveTextContent(ERROR_TEXT);
  });
  // it('should call general validation', () => {
  //   const { container } = render(<GeoContainer />);
  //   const inputLeft = screen.getByLabelText(/left/i);
  //   fireEvent.change(inputLeft, { target: { value: coordinates.NY_big.left } });

  //   const inputBottom = screen.getByLabelText(/bottom/i);
  //   fireEvent.change(inputBottom, { target: { value: coordinates.NY_big.bottom } });

  //   const inputRight = screen.getByLabelText(/right/i);
  //   fireEvent.change(inputRight, { target: { value: coordinates.NY_big.right } });

  //   const inputTop = screen.getByLabelText(/top/i);
  //   fireEvent.change(inputTop, { target: { value: coordinates.NY_big.top } });

  //   const button = screen.getByText(/Show on map/i);
  //   fireEvent.click(button);
  //   waitFor(() => {
  //     const error = container.getElementsByClassName('error-geo-input');
  //     expect(error.length).toBe(1);
  //   });
  //   screen.debug(container);
  // });
});
