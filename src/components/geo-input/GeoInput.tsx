import React, { FC, useContext } from 'react';

import Button from '../shared/button/Button';
import { CoordinatesContext } from '../geo-container/GeoContainer';
import './style.css';

import TextBox from '../shared/text-box/TextBox';
import { ERROR_TEXT } from '../constants';
const GeoInput: FC = () => {
  const { coordinates, handleCoordinateChange, loadGeoData, validationState, error } =
    useContext(CoordinatesContext);

  return (
    <>
      <div className="geo-form-container">
        <fieldset className="geo-form">
          <TextBox
            placeholder={'Please, enter top coordinate'}
            onChange={(e) => handleCoordinateChange(e, 'top')}
            value={coordinates.top}
            error={ERROR_TEXT}
            isValid={validationState.top}
          >
            {'top'}
          </TextBox>
          <div className="geo-row">
            <TextBox
              placeholder={'Please, enter left coordinate'}
              onChange={(e) => handleCoordinateChange(e, 'left')}
              value={coordinates.left}
              error={ERROR_TEXT}
              isValid={validationState.left}
            >
              {'left'}
            </TextBox>
            <TextBox
              placeholder={'Please, enter right coordinate'}
              onChange={(e) => handleCoordinateChange(e, 'right')}
              value={coordinates.right}
              error={ERROR_TEXT}
              isValid={validationState.right}
            >
              {'right'}
            </TextBox>
          </div>
          <TextBox
            placeholder={'Please, enter bottom coordinate'}
            onChange={(e) => handleCoordinateChange(e, 'bottom')}
            value={coordinates.bottom}
            error={ERROR_TEXT}
            isValid={validationState.bottom}
          >
            {'bottom'}
          </TextBox>
        </fieldset>
        {error && <div className="error">{error}</div>}
        <Button onClick={loadGeoData}>{'Show on map'}</Button>
      </div>
    </>
  );
};
export default GeoInput;
