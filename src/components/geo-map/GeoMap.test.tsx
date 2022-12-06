import React from 'react';
import { render } from '@testing-library/react';
import GeoMap from './GeoMap';

describe('GeoMap', () => {
  it('should render map', () => {
    const { container } = render(<GeoMap />);
    const map = container.getElementsByClassName('map');
    expect(map.length).toBe(1);
  });
});
