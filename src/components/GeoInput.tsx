import React, { FC, useContext } from 'react';

import Button from './Button';
import { CoordinatesContext } from './GeoContainer';

import InputTextBox from './InputTextBox';
const GeoInput: FC = () => {
  const { coordinates, handleCoordinateChange, loadGeoData } = useContext(CoordinatesContext);

  return (
    <>
      <form>
        <InputTextBox
          placeholder={'Please, enter top coordinate'}
          onChange={(e) => handleCoordinateChange(e, 'top')}
          value={coordinates.top}
        >
          {'top'}
        </InputTextBox>
        <div>
          <InputTextBox
            placeholder={'Please, enter left coordinate'}
            onChange={(e) => handleCoordinateChange(e, 'left')}
            value={coordinates.left}
          >
            {'left'}
          </InputTextBox>
          <InputTextBox
            placeholder={'Please, enter right coordinate'}
            onChange={(e) => handleCoordinateChange(e, 'right')}
            value={coordinates.right}
          >
            {'right'}
          </InputTextBox>
        </div>
        <InputTextBox
          placeholder={'Please, enter bottom coordinate'}
          onChange={(e) => handleCoordinateChange(e, 'bottom')}
          value={coordinates.bottom}
        >
          {'bottom'}
        </InputTextBox>
        <Button onClick={loadGeoData}>{'Show on map'}</Button>
      </form>
    </>
  );
};
export default GeoInput;
