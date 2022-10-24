import { render } from '@testing-library/react';

import { Loader } from '../index';

describe('Loader', () => {
  it('renders a loader', () => {
    const { getByTestId } = render(
      <Loader aria-label="Basic Loader example" />,
    );
    const loader = getByTestId('loader-wrapper');

    expect(loader).toBeInTheDocument();
    expect(loader).toMatchSnapshot();
  });

  it('renders snapshot of inverted', () => {
    const { getByTestId } = render(
      <Loader inverted aria-label="Inverted Loader example" />,
    );
    const loader = getByTestId('loader-wrapper');

    expect(loader).toBeInTheDocument();
    expect(loader).toMatchSnapshot();
  });
});
