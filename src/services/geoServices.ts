import osmtogeojson from 'osmtogeojson';
import apiClient from './api/api-client';
import coordinates from '../mocks/coordinates.json';
import { Coordinates } from '../models/geolocation';

export function parseXmlData(xmlString: string) {
  return new DOMParser().parseFromString(xmlString, 'application/xml');
}

export function convertOSM(document: Document) {
  return osmtogeojson(document, { flatProperties: true });
}

// export async function convertOSM(document: string) {
//     return osmtogeojson(document, { flatProperties: true });
//   }

export async function loadData(coordinates: Coordinates) {
  const xml = await apiClient.getOsmMapData(coordinates);
  console.log('xml', xml);
  const parsed = parseXmlData(xml);
  const geoJSON = convertOSM(parsed);
  console.log(geoJSON);
  return geoJSON;
}
