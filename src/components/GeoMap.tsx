import React, { FC, useContext, useEffect, useState } from 'react';

import coordinates from '../mocks/coordinates.json';
import { loadData, parseXmlData } from '../services/geoServices';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { FeatureCollection, Geometry, GeoJsonProperties, Feature } from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import featureCollection from '../mocks/featureCollection.json';
import './style.css';
import { CoordinatesContext } from './GeoContainer';
import { Coordinates } from '../models/geolocation';

const defaultCenter = [40.7709, -73.9734];
const defaultZoom = 15;

const GeoMap: FC = () => {
  const { coordinates, geoData } = useContext(CoordinatesContext);
  console.log('test', JSON.parse(JSON.stringify(featureCollection)));

  const featureHandler = (feature: Feature<Geometry, any>, layer: L.Layer) => {
    layer.bindPopup(
      `box coords: ${coordinates.left},
        ${coordinates.bottom},
        ${coordinates.right},
        ${coordinates.top}
      `
    );
  };
  return (
    <div>
      <h1> Current Box</h1>
      <MapContainer className="map" zoom={defaultZoom} center={[52.3687, 13.4871]}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* <GeoJSON data={JSON.parse(JSON.stringify(featureCollection.features))} /> */}
        {geoData && <GeoJSON data={geoData} onEachFeature={featureHandler} />}
      </MapContainer>
    </div>
  );
};

export default GeoMap;
