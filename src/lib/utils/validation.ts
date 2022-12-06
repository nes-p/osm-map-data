import { INPUT_COORD_REGEXP, VALIDATION_REGEXP } from '../constants';

export const validateGeoInput = (value: string): boolean => {
  if (INPUT_COORD_REGEXP.test(value) || value === '') {
    return true;
  }
  return false;
};

export const coordinatesValidation = (value: string): boolean => {
  if (VALIDATION_REGEXP.test(value)) {
    return true;
  }
  return false;
};
