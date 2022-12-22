import { ChevronLeft, ChevronRight } from '../icon';
import { useMediaQuery } from '../hooks';
import { Button } from '../button';

import { navigationButtonStyle } from './styles';

const variantMap = {
  previous: {
    label: 'Previous',
    ariaLabel: 'Previous page',
    icon: <ChevronLeft />,
    modifier: -1, // Amount to modify the currentPage by
  },
  next: {
    label: 'Next',
    ariaLabel: 'Next page',
    icon: <ChevronRight />,
    modifier: 1, // Amount to modify the currentPage by
  },
};

type NavigationProps = {
  navigationVariant: 'previous' | 'next';
  currentPage: number;
  inverted: boolean;
  disabled: boolean;
  clickHandler: (newPage: number) => void;
};

function Navigation({
  navigationVariant,
  currentPage,
  inverted,
  disabled,
  clickHandler,
}: NavigationProps) {
  const { isAboveSmall } = useMediaQuery();

  function onClick() {
    clickHandler(currentPage + variantMap[navigationVariant].modifier);
  }

  return (
    <li>
      {isAboveSmall ? (
        <Button
          {...{
            css: navigationButtonStyle({
              inverted,
              navigationVariant,
            }),
            onClick,
            inverted,
            variant: 'plain',
            ...(disabled && { disabled, 'aria-disabled': true }),
            'aria-label': variantMap[navigationVariant].ariaLabel,
            ...(navigationVariant === 'previous'
              ? { iconLeft: variantMap[navigationVariant].icon }
              : { iconRight: variantMap[navigationVariant].icon }),
            'data-testid': 'pagination-navigation',
          }}
        >
          {variantMap[navigationVariant].label}
        </Button>
      ) : (
        <Button
          {...{
            css: navigationButtonStyle({
              inverted,
              navigationVariant,
            }),
            onClick,
            inverted,
            variant: 'plain',
            ...(disabled && { disabled, 'aria-disabled': true }),
            icon: variantMap[navigationVariant].icon,
            'aria-label': variantMap[navigationVariant].ariaLabel,
            'data-testid': 'pagination-navigation',
          }}
        />
      )}
    </li>
  );
}

export default Navigation;
