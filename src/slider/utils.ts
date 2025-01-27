export function initialError(isSingleInput: boolean) {
  return isSingleInput ? [''] : ['', ''];
}

export function hasError(error: string[]) {
  return !!error.find((message) => {
    return message !== '';
  });
}

// Determine allowed value for input
export function isDecimal(value: string) {
  return /^-?([0-9]{1,})?(\.)?([0-9]{1,})?$/.test(value);
}

// Check if value can be safely set on slider
export function isValidValue(value: string, step: number) {
  return (
    !Number.isNaN(parseFloat(value)) &&
    parseFloat(value) % step === 0 &&
    !/.+\.0*$/.test(value) // Don't immediately parse dot followed by zero(s)
  );
}

// For better UX don't show error when input is empty or contains minus or dot
export function isNotWhitelisted(value: string) {
  return value !== '' && value !== '-' && !value.endsWith('.');
}

// For simplicity these values are hardcoded
// Takes a lot of extra effort to calculate them
const SINGLE_CHAR_WIDTH = 9;
const INPUT_SPACING = 24;
const MIN_INPUT_WIDTH = 60;

export function calculateInputWidth(min: number, max: number, step: number) {
  const isNegative = min < 0 || max < 0 ? 1 : 0;
  const numberOfRangeChars = Math.max(Math.abs(min), Math.abs(max)).toString()
    .length;
  const numberOfStepFractionalChars =
    step.toString().match(/\.[0-9]+$/)?.[0].length || 0; // Dot is included

  const width =
    (isNegative + numberOfRangeChars + numberOfStepFractionalChars) *
      SINGLE_CHAR_WIDTH +
    INPUT_SPACING;

  return width < MIN_INPUT_WIDTH ? MIN_INPUT_WIDTH : width;
}
