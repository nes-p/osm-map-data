import React, { createContext, FC, useState } from 'react';
import { Coordinates, ValidationState } from '../../models/geolocation';
import GeoInput from '../geo-input/GeoInput';
import GeoMap from '../geo-map/GeoMap';
import { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';
import { loadData } from '../../services/geoServices';
import { coordinatesValidation, validateGeoInput } from '../helpers';

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
  validationState: ValidationState;
  loading: boolean;
  // ToDO check this
  error: string | null;
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
  validationState: {
    top: true,
    left: true,
    right: true,
    bottom: true,
  },
  loading: false,
  error: null,
});

export const GeoContainer: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    top: 52.3712,
    left: 13.4871,
    right: 13.4919,
    bottom: 52.3687,
  });

  const [validationState, setValidationState] = useState({
    top: true,
    left: true,
    right: true,
    bottom: true,
  });

  const [geoData, setGeoData] = useState<FeatureCollection<Geometry, GeoJsonProperties>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCoordinateChange = (
    { target: { value } }: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    validateGeoInput(value) &&
      setCoordinates((prev) => ({
        ...prev,
        [key]: value,
      }));
    console.log('coordinates', coordinates);
  };

  // const checkValidationState2 = () => {
  //   let coord: keyof typeof coordinates;
  //   for (coord in coordinates) {
  //     const isValid = coordinatesValidation(`${coordinates[coord]}`);
  //     setValidationState((prev) => ({
  //       ...prev,
  //       [coord]: isValid,
  //     }));
  //     console.log('validationState', validationState);
  //   }
  //   console.log('validationState', validationState);
  // };

  const validateState = () => {
    const newState = {
      top: coordinatesValidation(`${coordinates['top']}`),
      left: coordinatesValidation(`${coordinates['left']}`),
      right: coordinatesValidation(`${coordinates['right']}`),
      bottom: coordinatesValidation(`${coordinates['bottom']}`),
    };
    const formIsValid = Object.values(newState).every((cood) => cood === true);
    setValidationState(newState);
    return formIsValid;
  };

  const loadGeoData = () => {
    const isCoordsValid = validateState();
    if (isCoordsValid) {
      setLoading(true);
      loadData(coordinates)
        .then((data) => setGeoData(data))
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <CoordinatesContext.Provider
        value={{
          coordinates,
          handleCoordinateChange,
          loadGeoData,
          geoData,
          validationState,
          loading,
          error,
        }}
      >
        <GeoInput />
        <GeoMap />
      </CoordinatesContext.Provider>
    </>
  );
};
export default GeoContainer;
