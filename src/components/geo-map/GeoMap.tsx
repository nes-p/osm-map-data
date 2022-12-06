import React, { FC, useContext, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Geometry, Feature, GeoJsonProperties } from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CoordinatesContext } from '../geo-container/GeoContainer';
import GeoJsonWithUpdates from '../geo-json-with-updates/GeoJsonWithUpdates';
import { defaultMapZoom } from '../../lib/constants';
import './style.css';

const GeoMap: FC = () => {
  const { coordinates, geoData } = useContext(CoordinatesContext);
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

  const featureHandler = (feature: Feature<Geometry, GeoJsonProperties>, layer: L.Layer) => {
    layer.bindPopup(
      `box coords: ${coordinates.left},
        ${coordinates.bottom},
        ${coordinates.right},
        ${coordinates.top}
      `
    );
  };

  const center: L.LatLngExpression | undefined = [coordinates.top, coordinates.left];

  return (
    <div className="map-outer-container">
      <MapContainer className="map" zoom={defaultMapZoom} center={center}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoData && <GeoJsonWithUpdates data={geoData} onEachFeature={featureHandler} />}
      </MapContainer>
    </div>
  );
};

export default GeoMap;
