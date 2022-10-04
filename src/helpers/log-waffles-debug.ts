/* eslint-disable no-console */

const WAFFLES_ERROR_PREFIX = 'WAFFLES Error: ';
const WAFFLES_WARN_PREFIX = 'WAFFLES Warning: ';

// Log an error to the debug console
function wafflesDebugError(message: string) {
  console.error(WAFFLES_ERROR_PREFIX.concat(message));
}

// Log a warning to the debug console
function wafflesDebugWarning(message: string) {
  console.warn(WAFFLES_WARN_PREFIX.concat(message));
}

// TODO: Add support for an error/warning code for association to docs - @ixTec
/**
 * Log a `console.warn` or `console.error` from within a Waffles component. Renders as a warning by default
 *
 * @param message The message to provide alongside the error/warning
 * @param isError Specifies whether it should be logged as an error
 */
function logWafflesDebug(message: string, isError = false) {
  isError ? wafflesDebugError(message) : wafflesDebugWarning(message);
}

export default logWafflesDebug;
