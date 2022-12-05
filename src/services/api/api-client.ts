// import osmtogeojson from 'osmtogeojson';
import { Coordinates } from '../../models/geolocation';
const API_BASE = 'https://www.openstreetmap.org/api/0.6/map';
const apiClient = {
  getOsmMapData: async (coordinates: Coordinates) => {
    const response = await fetch(
      `${API_BASE}?bbox=${coordinates.left},${coordinates.bottom},${coordinates.right},${coordinates.top}`,
      {
        // headers: {
        //   'Content-Type': 'application/xml',
        // },
      }
    );
    // return await response.text();
    return response;

    //   .then(({ text }) => {
    //     console.log(text);

    //     return new DOMParser().parseFromString(data, 'application/xml');
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     const geoJSON = osmtogeojson(res, { flatProperties: true });
    //     return geoJSON;
    //   })
    //   .then((newRes) => console.log(newRes));
  },
  //   getOsm: (coordinates: Coordinates) => {
  //     axios
  //       .get(
  //         `${API_BASE}?bbox=${coordinates.left},${coordinates.bottom},${coordinates.right},${coordinates.top}`
  //       )
  //       .then(({ data }) => {
  //         return new DOMParser().parseFromString(data, 'application/xml');
  //       })
  //       .then((res) => {
  //         const geoJSON = osmtogeojson(res, { flatProperties: true });
  //         return geoJSON;
  //       })
  //       .then((newRes) => console.log(newRes));
  //   },
};

export default apiClient;
