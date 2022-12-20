import { ChevronLeft, ChevronRight } from '../icon';
import { useMediaQuery } from '../hooks';
import { Button } from '../button';

import { navigationButtonStyle } from './styles';

const variantMap = {
  previous: {
    label: 'Previous',
    ariaLabel: 'Previous page',
    icon: <ChevronLeft />,
    modifier: -1,
  },
  next: {
    label: 'Next',
    ariaLabel: 'Next page',
    icon: <ChevronRight />,
    modifier: 1,
  },
};

type NavigationProps = {
  variant: 'previous' | 'next';
  currentPage: number;
  inverted: boolean;
  disabled: boolean;
  clickHandler: (newPage: number) => void;
};

function Navigation({
  variant,
  currentPage,
  inverted,
  disabled,
  clickHandler,
}: NavigationProps) {
  const { isAboveSmall } = useMediaQuery();

  function onClick() {
    clickHandler(currentPage + variantMap[variant].modifier);
  }

  return (
    <li>
      {isAboveSmall ? (
        <Button
          {...{
            css: navigationButtonStyle({ inverted, variant }),
            onClick,
            inverted,
            variant: 'plain',
            ...(disabled && { disabled, 'aria-disabled': true }),
            'aria-label': variantMap[variant].ariaLabel,
            ...(variant === 'previous'
              ? { iconLeft: variantMap[variant].icon }
              : { iconRight: variantMap[variant].icon }),
          }}
        >
          {variantMap[variant].label}
        </Button>
      ) : (
        <Button
          {...{
            css: navigationButtonStyle({ inverted, variant }),
            onClick,
            inverted,
            variant: 'plain',
            ...(disabled && { disabled, 'aria-disabled': true }),
            icon: variantMap[variant].icon,
            'aria-label': variantMap[variant].ariaLabel,
          }}
        />
      )}
    </li>
  );
}

export default Navigation;
