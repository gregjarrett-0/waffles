export function initialError(isSingleInput: boolean) {
  return isSingleInput ? [false] : [false, false];
}

// Determine allowed value for input
export function isDecimal(value: string) {
  return /^-?([0-9]{1,})?(\.)?([0-9]{1,})?$/.test(value);
}

// Check if value could be safely set on slider
export function isValidValue(value: string, step: number) {
  return (
    !Number.isNaN(parseFloat(value)) &&
    parseFloat(value) % step === 0 &&
    !value.endsWith('.')
  );
}

// For better UX don't show error when input is empty or contains minus or dot
export function isNotWhitelisted(value: string) {
  return value !== '' && value !== '-' && value !== '.';
}
