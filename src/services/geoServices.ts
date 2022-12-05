import osmtogeojson from 'osmtogeojson';
import apiClient from './api/api-client';
import { Coordinates } from '../models/geolocation';

export function parseXmlData(xmlString: string) {
  return new DOMParser().parseFromString(xmlString, 'application/xml');
}

export function convertOSM(document: Document) {
  return osmtogeojson(document, { flatProperties: true });
}

export async function loadData(coordinates: Coordinates) {
  const result = await apiClient.getOsmMapData(coordinates);
  if (!result.ok) throw await result.text();
  const xml = await result.text();
  console.log(xml);
  const parsed = parseXmlData(xml);
  console.log('======================');
  console.log(parsed);
  const geoJSON = convertOSM(parsed);
  return geoJSON;
}
