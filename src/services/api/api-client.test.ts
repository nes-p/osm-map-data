import apiClient from './api-client';
import coordinates from '../../mocks/coordinates.json';

const mockSuccessResponse = {
  ok: true,
  status: 200,
};

const mockServerErrorResponse400 = {
  ok: false,
  status: 400,
};

('You requested too many nodes (limit is 50000). Either request a smaller area, or use planet.osm');
const mockFetchPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromiseFailure400 = Promise.resolve(mockServerErrorResponse400);

describe('API client', () => {
  it('GET request', async () => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    const getRequestUrl =
      'https://www.openstreetmap.org/api/0.6/map?bbox=13.4871,52.3687,13.4919,52.3712';
    const getRequestParams = {};

    const response = await apiClient.getOsmMapData(coordinates.Berlin);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toBeCalledWith(getRequestUrl, getRequestParams);
    expect(response).toMatchObject({ ok: true, status: 200 });
  }),
    it('400 responses for GET', async () => {
      global.fetch = jest.fn().mockImplementation(() => mockFetchPromiseFailure400);
      const response = await apiClient.getOsmMapData(coordinates.NY_big);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(response).toMatchObject({ ok: false, status: 400 });
    });
});
