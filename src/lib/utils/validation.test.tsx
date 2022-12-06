import { coordinatesValidation, validateGeoInput } from './validation';

describe('helpers', () => {
  it('validateGeoInput should return true', () => {
    const result = validateGeoInput('12345');
    expect(result).toBe(true);
  });
  it('validateGeoInput should return false', () => {
    const result = validateGeoInput('test');
    expect(result).toBe(false);
  });
  it('coordinatesValidation should return true', () => {
    const result = coordinatesValidation('12.345');
    expect(result).toBe(true);
  });
  it('coordinatesValidation should return false', () => {
    const result = coordinatesValidation('12345');
    expect(result).toBe(false);
  });
});
