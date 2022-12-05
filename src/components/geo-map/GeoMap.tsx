import React, { FC, useContext, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Geometry, Feature } from 'geojson';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import featureCollection from '../../mocks/featureCollection.json';

import { CoordinatesContext } from '../geo-container/GeoContainer';
import './style.css';
import GeoJsonWithUpdates from '../GeoJsonWithUpdates';

const defaultZoom = 2;

const GeoMap: FC = () => {
  const { coordinates, geoData } = useContext(CoordinatesContext);
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

  // console.log('test', JSON.parse(JSON.stringify(featureCollection)));

  // TODO: any
  const featureHandler = (feature: Feature<Geometry, any>, layer: L.Layer) => {
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
      <MapContainer className="map" zoom={defaultZoom} center={center}>
        <>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* <GeoJSON data={JSON.parse(JSON.stringify(featureCollection.features))} /> */}
          {/* {console.log('geoData', geoData)}
          {console.log('center', center)} */}
          {geoData && (
            <>
              {/* <GeoJSON data={geoData} onEachFeature={featureHandler} ref={geoJsonLayerRef} /> */}
              <GeoJsonWithUpdates data={geoData} onEachFeature={featureHandler} />
            </>
          )}
        </>
      </MapContainer>
    </div>
  );
};

export default GeoMap;
