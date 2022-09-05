import {
  initialError,
  isDecimal,
  isValidValue,
  isNotWhitelisted,
} from '../utils';

describe('initialError', () => {
  it('return array with single false value when true is passed', () => {
    expect(initialError(true)).toEqual([false]);
  });

  it('return tuple with false values when false is passed', () => {
    expect(initialError(false)).toEqual([false, false]);
  });
});

describe('isDecimal', () => {
  it('return true if the passed string is a decimal value', () => {
    expect(isDecimal('11')).toBe(true);
    expect(isDecimal('-11')).toBe(true);
    expect(isDecimal('0')).toBe(true);
    expect(isDecimal('0.0')).toBe(true);
    expect(isDecimal('0.42')).toBe(true);
    expect(isDecimal('.42')).toBe(true);
    expect(isDecimal('11.4276')).toBe(true);
    expect(isDecimal('-.76')).toBe(true);
    expect(isDecimal('-11.756')).toBe(true);
  });

  it('return true if empty string is passed', () => {
    expect(isDecimal('')).toBe(true);
  });

  it('return false if the passed string is NOT a decimal value', () => {
    expect(isDecimal('ab C')).toBe(false);
    expect(isDecimal('-11.45.56')).toBe(false);
    expect(isDecimal('0AB')).toBe(false);
    expect(isDecimal('.42.42')).toBe(false);
    expect(isDecimal('.42.a')).toBe(false);
    expect(isDecimal('-76.5a')).toBe(false);
    expect(isDecimal('a11.756')).toBe(false);
  });
});

describe('isValidValue', () => {
  it('return true if value overlaps with step', () => {
    expect(isValidValue('11', 1)).toBe(true);
    expect(isValidValue('11', 11)).toBe(true);
    expect(isValidValue('33', 11)).toBe(true);
    expect(isValidValue('-12', 1)).toBe(true);
    expect(isValidValue('56.75', 0.25)).toBe(true);
    expect(isValidValue('-11.25', 0.25)).toBe(true);
    expect(isValidValue('42', 0.25)).toBe(true);
    expect(isValidValue('40', 10)).toBe(true);
  });

  it("return false if value doesn't overlap with step", () => {
    expect(isValidValue('11', 10)).toBe(false);
    expect(isValidValue('-12', 10)).toBe(false);
    expect(isValidValue('56.75', 0.5)).toBe(false);
    expect(isValidValue('-11.25', 0.5)).toBe(false);
    expect(isValidValue('44', 3)).toBe(false);
    expect(isValidValue('40', 100)).toBe(false);
  });

  it('return false if value ends with dot', () => {
    expect(isValidValue('11.', 1)).toBe(false);
    expect(isValidValue('-12.', 1)).toBe(false);
    expect(isValidValue('0.', 1)).toBe(false);
  });
});

describe('isWhitelisted', () => {
  it('return false if it is precisely one of the whitelisted values', () => {
    expect(isNotWhitelisted('-')).toBe(false);
    expect(isNotWhitelisted('.')).toBe(false);
    expect(isNotWhitelisted('')).toBe(false);
  });

  it('return true if it is NOT one of the whitelisted values', () => {
    expect(isNotWhitelisted('-0')).toBe(true);
    expect(isNotWhitelisted('--')).toBe(true);
    expect(isNotWhitelisted('.42')).toBe(true);
    expect(isNotWhitelisted('..')).toBe(true);
    expect(isNotWhitelisted('11')).toBe(true);
    expect(isNotWhitelisted('0xA')).toBe(true);
  });
});
