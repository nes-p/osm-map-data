import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import apiClient from './services/api/api-client';
import coordinates from './mocks/coordinates.json';
import { loadData, parseXmlData } from './services/geoServices';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import featureCollection from './mocks/featureCollection.json';
import GeoMap from './components/GeoMap';
import GeoContainer from './components/GeoContainer';
const defaultCenter = [40.7709, -73.9734];
const defaultZoom = 16;

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <MapContainer zoom={defaultZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {data && <GeoJSON data={data} />}
        {<GeoJSON data={JSON.parse(JSON.stringify(featureCollection.features))} />}
      </MapContainer> */}
      {/* <GeoMap /> */}
      <GeoContainer />
    </div>
  );
}

export default App;
