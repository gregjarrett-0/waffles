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

const SINGLE_CHAR_WIDTH = 9;
const INPUT_SPACING = 24;
const MIN_INPUT_WIDTH = 60;

export function calculateInputWidth(min: number, max: number, step: number) {
  const isNegative = min < 0 || max < 0 ? 1 : 0;
  const numberOfRangeChars = Math.max(Math.abs(min), Math.abs(max)).toString()
    .length;
  const numberOfStepFractionalChars =
    step.toString().match(/\.([0-9]+)$/)?.[1].length || 0; // Don't take dot into account

  const width =
    (isNegative + numberOfRangeChars + numberOfStepFractionalChars) *
      SINGLE_CHAR_WIDTH +
    INPUT_SPACING;

  return width < MIN_INPUT_WIDTH ? MIN_INPUT_WIDTH : width;
}
