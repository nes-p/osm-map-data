import { INPUT_COORD_REGEXP, VALIDATION_REGEXP } from './constants';

export const validateGeoInput = (value: string) => {
  if (INPUT_COORD_REGEXP.test(value) || value === '') {
    return true;
  }
  return false;
};

export const coordinatesValidation = (value: string) => {
  if (VALIDATION_REGEXP.test(value)) {
    return true;
  }
  return false;
};
