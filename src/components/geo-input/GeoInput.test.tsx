import React, { useContext } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import GeoInput from './GeoInput';
import coordinates from '../../mocks/coordinates.json';
import { CoordinatesContextProps } from '../geo-container/GeoContainer';

const callApiMock = jest.fn();
const callInputMock = jest.fn();
const CONTEXT_DATA: CoordinatesContextProps = {
  coordinates: coordinates.Berlin,
  // TODO: check this
  handleCoordinateChange: callInputMock,
  loadGeoData: callApiMock,
  //TODO: check this
  geoData: undefined,
  validationState: {
    top: true,
    left: true,
    right: true,
    bottom: true,
  },
  loading: false,
  error: null,
};

jest.mock('react-leaflet', () => ({}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('GeoInput', () => {
  beforeEach(() => {
    (useContext as jest.Mock).mockReturnValue(CONTEXT_DATA);
  });

  it('should display top label', () => {
    render(<GeoInput />);
    const top = screen.getByText(/top/i);
    screen.debug(top);
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

  it('should call function on button click', () => {
    render(<GeoInput />);
    const button = screen.getByText(/Show on map/i);
    act(() => {
      fireEvent.click(button);
    });
    expect(callApiMock).toBeCalled();
  });

  it('input handler should be called', () => {
    render(<GeoInput />);
    const input = screen.getByLabelText(/left/i);
    act(() => {
      fireEvent.change(input, { target: { value: '1' } });
    });
    act(() => {
      fireEvent.change(input, { target: { value: '2' } });
    });
    expect(callInputMock).toBeCalledTimes(2);
  });
});
