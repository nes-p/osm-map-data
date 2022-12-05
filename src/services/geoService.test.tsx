import coordinates from '../mocks/coordinates.json';
import { loadData } from './geoServices';
import featureCollection from '../mocks/featureCollection.json';
import { waitFor } from '@testing-library/react';

describe('GeoService', () => {
  it('should return geoJson', async () => {
    const result = await loadData(coordinates.Berlin);
    waitFor(() => expect(result).toBe(featureCollection));
  });
});
