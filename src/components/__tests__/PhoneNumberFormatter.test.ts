import { formatPhoneNumber } from '../utils/PhoneNumberFormatter';

describe('phoneNumberFormatter', () => {
  it('returns undefined when passing undefined as argument', () => {
    expect(formatPhoneNumber(undefined)).toBeUndefined();
  });

  it('returns formatted number', () => {
    expect(formatPhoneNumber('0701740635')).toBe('070-174 06 35');
  });

  it('returns formatted number when prefixed with +46', () => {
    expect(formatPhoneNumber('+46701740635')).toBe('070-174 06 35');
  });

  it('returns formatted number when prefixed with 46', () => {
    expect(formatPhoneNumber('46701740635')).toBe('070-174 06 35');
  });

  it('returns formatted number when 46 are in the middle of the number', () => {
    expect(formatPhoneNumber('013-1346429')).toBe('013-134 64 29');
  });
});
