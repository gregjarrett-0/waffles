import { ChevronLeft, ChevronRight } from '../icon';
import { useMediaQuery } from '../hooks';
import { Button } from '../button';

import { navigationButtonStyle } from './styles';
import Pagination from './pagination';

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
  clickHandler: NonNullable<
    React.ComponentProps<typeof Pagination>['onChange']
  >;
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

  return isAboveSmall ? (
    <Button
      {...{
        css: navigationButtonStyle({ inverted }),
        onClick,
        disabled,
        inverted,
        variant: 'plain',

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
        css: navigationButtonStyle({ inverted }),
        onClick,
        disabled,
        inverted,
        variant: 'plain',
        icon: variantMap[variant].icon,
        'aria-label': variantMap[variant].ariaLabel,
      }}
    />
  );
}

export default Navigation;
