import {
  logError,
  logWarning,
  WAFFLES_ERROR_PREFIX,
  WAFFLES_WARN_PREFIX,
} from '../log-waffles-debug';

describe('Waffles errors and warnings', () => {
  it('logError util should log a console.error', async () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
    logError('Test error message');

    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    expect(consoleErrorMock).toHaveBeenCalledWith(
      `${WAFFLES_ERROR_PREFIX}Test error message`,
    );

    consoleErrorMock.mockReset();
  });

  it('logWarn util should log a console.warn', async () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();
    logWarning('Test warning message');

    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      `${WAFFLES_WARN_PREFIX}Test warning message`,
    );

    consoleWarnMock.mockReset();
  });
});
