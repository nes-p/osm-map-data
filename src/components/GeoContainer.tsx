import React, { createContext, FC, useState } from 'react';
import { Coordinates } from '../models/geolocation';
import GeoInput from './GeoInput';
import GeoMap from './GeoMap';
import { FeatureCollection, Geometry, GeoJsonProperties, Feature } from 'geojson';
import { loadData } from '../services/geoServices';

export interface CoordinatesContextProps {
  coordinates: Coordinates;
  handleCoordinateChange: (
    {
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => void;
  loadGeoData: () => void;
  geoData?: FeatureCollection<Geometry, GeoJsonProperties>;
}

export const CoordinatesContext = createContext<CoordinatesContextProps>({
  coordinates: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  // TODO: check this
  handleCoordinateChange: () => null,
  loadGeoData: () => null,
  //TODO: check this
  geoData: undefined,
});

export const GeoContainer: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const handleCoordinateChange = (
    { target: { value } }: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setCoordinates((event) => ({
      ...event,
      [key]: value,
    }));
  };

  const [geoData, setGeoData] = useState<FeatureCollection<Geometry, GeoJsonProperties>>();
  const loadGeoData = () => {
    loadData(coordinates).then((result) => setGeoData(result));
  };

  return (
    <>
      <CoordinatesContext.Provider
        value={{
          coordinates,
          handleCoordinateChange,
          loadGeoData,
          geoData,
        }}
      >
        <GeoInput />
        <GeoMap />
      </CoordinatesContext.Provider>
    </>
  );
};
export default GeoContainer;
