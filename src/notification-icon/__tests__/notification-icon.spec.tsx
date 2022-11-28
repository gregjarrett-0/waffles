import { render } from '@testing-library/react';

import { NotificationIcon } from '../index';

const variants = ['info', 'success', 'warning', 'error', 'upgrade'] as const;
const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const;

describe('NotificationCard', () => {
  describe('renders snapshot at all sizes of', () => {
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        it(`variant ${variant}, size ${size}`, () => {
          const { getByTestId } = render(
            <NotificationIcon variant={variant} size={size} />,
          );

          const notificationIcon = getByTestId('notification-icon');

          expect(notificationIcon).toMatchSnapshot();
        });
      });
    });
  });
});

describe('renders inverted snapshot at all sizes of', () => {
  variants.forEach((variant) => {
    sizes.forEach((size) => {
      it(`inverted variant ${variant}, size ${size}`, () => {
        const { getByTestId } = render(
          <NotificationIcon variant={variant} size={size} inverted />,
        );

        const notificationIcon = getByTestId('notification-icon');

        expect(notificationIcon).toMatchSnapshot();
      });
    });
  });
});
