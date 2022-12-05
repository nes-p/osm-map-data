import React, { FC } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import GeoMap from './GeoMap';

describe('GeoMap', () => {
  const callMock = jest.fn();
  it('should call field validation', () => {
    const { container } = render(<GeoMap />);
    const map = container.getElementsByClassName('map');
    expect(map.length).toBe(1);
  });
});
