/* eslint-disable no-console */

// TODO: Add support for an error/warning code for association to docs - @ixTec

export const WAFFLES_ERROR_PREFIX = 'WAFFLES Error: ';
export const WAFFLES_WARN_PREFIX = 'WAFFLES Warning: ';

/**
 * Log a `console.error` from within a Waffles component.
 *
 * @param message The message to provide alongside the error
 */
export function logError(message: string) {
  console.error(WAFFLES_ERROR_PREFIX.concat(message));
}

/**
 * Log a `console.warn` from within a Waffles component.
 *
 * @param message The message to provide alongside the warning
 */
export function logWarning(message: string) {
  console.warn(WAFFLES_WARN_PREFIX.concat(message));
}
