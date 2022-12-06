import { Coordinates } from '../../models/geolocation';

const API_BASE = 'https://www.openstreetmap.org/api/0.6/map';
const apiClient = {
  getOsmMapData: async (coordinates: Coordinates) => {
    const response = await fetch(
      `${API_BASE}?bbox=${coordinates.left},${coordinates.bottom},${coordinates.right},${coordinates.top}`
    );
    return response;
  },
};

export default apiClient;
