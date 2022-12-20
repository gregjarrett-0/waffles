import { render, fireEvent, waitFor } from '@testing-library/react';

import { Pagination } from '../index';
import { useMediaQuery } from '../../hooks';

const TRUNCATION_SYMBOL = '…';
const useMediaQueryMock = useMediaQuery as jest.Mock;

jest.mock('../../hooks', () => {
  return {
    ...jest.requireActual('../../hooks'),
    useMediaQuery: jest.fn(),
  };
});

// TODO: These can probably be moved into a global location for all tests at a later date - ixTec
const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation();

afterEach(() => {
  consoleErrorMock.mockReset();
  consoleWarnMock.mockReset();
});

describe('Pagination', () => {
  beforeEach(() => {
    jest.resetAllMocks();

    useMediaQueryMock.mockReturnValue({
      isAboveSmall: true,
      isAboveMedium: true,
      isAboveLarge: false,
    });
  });

  afterEach(() => {
    expect(consoleErrorMock).not.toBeCalled();
    expect(consoleWarnMock).not.toBeCalled();
  });

  it('renders correct max number of pages when greater than max', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={10}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons).toHaveLength(7);
  });

  it('renders correct number of pages when total is less than max', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={4}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons).toHaveLength(4);
  });

  it('renders right truncation correctly', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={10}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons[5].textContent).toBe(TRUNCATION_SYMBOL);
  });

  it('renders left truncation correctly', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={10}
        currentPage={10}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons[1].textContent).toBe(TRUNCATION_SYMBOL);
  });

  it('renders both truncations correctly', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={10}
        currentPage={5}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons[5].textContent).toBe(TRUNCATION_SYMBOL);
    expect(pageButtons[1].textContent).toBe(TRUNCATION_SYMBOL);
  });

  it('has appropriate a11y attributes', () => {
    const { getByTestId, getByText, getByLabelText } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={7}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pagination = getByTestId('pagination');
    const firstPage = getByText('1').parentElement;
    const previousButton = getByLabelText('Previous page');

    expect(pagination).toHaveAttribute('aria-label', 'Pagination example');
    expect(firstPage).toHaveAttribute('aria-current', 'page');
    expect(previousButton).toHaveAttribute('aria-disabled', 'true');
  });

  it('click on page button is handled correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={7}
        currentPage={1}
        onChange={handleClick}
      />,
    );

    const secondPage = getByText('2');
    fireEvent.click(secondPage);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders snapshot', () => {
    const { getByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={7}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pagination = getByTestId('pagination');

    expect(pagination).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { getByTestId } = render(
      <Pagination
        inverted
        aria-label="Inverted pagination example"
        totalPages={7}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pagination = getByTestId('pagination');

    expect(pagination).toMatchSnapshot();
  });
});

describe('Pagination mobile', () => {
  beforeEach(() => {
    jest.resetAllMocks();

    useMediaQueryMock.mockReturnValue({
      isAboveSmall: false,
      isAboveMedium: false,
      isAboveLarge: false,
    });
  });

  it('renders correct max number of pages', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={10}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons).toHaveLength(5);
  });

  it('renders right truncation correctly', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={10}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons[3].textContent).toBe(TRUNCATION_SYMBOL);
  });

  it('renders left truncation correctly', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={10}
        currentPage={10}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons[1].textContent).toBe(TRUNCATION_SYMBOL);
  });

  it('renders both truncations correctly', () => {
    const { getAllByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={10}
        currentPage={5}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pageButtons = getAllByTestId('pagination-page');
    expect(pageButtons[3].textContent).toBe(TRUNCATION_SYMBOL);
    expect(pageButtons[1].textContent).toBe(TRUNCATION_SYMBOL);
  });

  it('renders snapshot', () => {
    const { getByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={7}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pagination = getByTestId('pagination');

    expect(pagination).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { getByTestId } = render(
      <Pagination
        inverted
        aria-label="Inverted pagination example"
        totalPages={7}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    const pagination = getByTestId('pagination');

    expect(pagination).toMatchSnapshot();
  });
});

describe('Pagination errors', () => {
  it('invalid currentPage should log a console.error', async () => {
    const { getByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={7}
        currentPage={-1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    let pagination;
    await waitFor(() => {
      pagination = getByTestId('pagination');
    });

    expect(pagination).toBeInTheDocument();
    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).not.toBeCalled();
  });

  it('invalid totalPages should log a console.error', async () => {
    const { getByTestId } = render(
      <Pagination
        aria-label="Pagination example"
        totalPages={-1}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination"
      />,
    );

    let pagination;
    await waitFor(() => {
      pagination = getByTestId('pagination');
    });

    expect(pagination).toBeInTheDocument();
    expect(consoleErrorMock).toHaveBeenCalledTimes(1);
    expect(consoleWarnMock).not.toBeCalled();
  });
});
