import {
  logWafflesError,
  logWafflesWarning,
  WAFFLES_ERROR_PREFIX,
  WAFFLES_WARN_PREFIX,
} from '../log-waffles-debug';

describe('Waffles errors and warnings', () => {
  it('logWafflesError should log a console.error', async () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
    logWafflesError('Test error message');

    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    expect(consoleErrorMock).toHaveBeenCalledWith(
      `${WAFFLES_ERROR_PREFIX}Test error message`,
    );

    consoleErrorMock.mockReset();
  });

  it('logWafflesError should log a console.warn', async () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();
    logWafflesWarning('Test warning message');

    expect(consoleWarnMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).toHaveBeenCalledWith(
      `${WAFFLES_WARN_PREFIX}Test warning message`,
    );

    consoleWarnMock.mockReset();
  });
});
