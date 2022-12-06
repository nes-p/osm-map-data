import osmtogeojson from 'osmtogeojson';
import apiClient from './api/api-client';
import { Coordinates } from '../models/geolocation';
import { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

export function parseXmlData(xmlString: string): Document {
  return new DOMParser().parseFromString(xmlString, 'application/xml');
}

export function convertOSM(document: Document): FeatureCollection<Geometry, GeoJsonProperties> {
  return osmtogeojson(document, { flatProperties: true });
}

export async function loadData(
  coordinates: Coordinates
): Promise<FeatureCollection<Geometry, GeoJsonProperties>> {
  const result = await apiClient.getOsmMapData(coordinates);
  if (!result.ok) throw await result.text();
  const xml = await result.text();
  const parsed = parseXmlData(xml);
  const geoJSON = convertOSM(parsed);
  return geoJSON;
}
