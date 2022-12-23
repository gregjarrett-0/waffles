import { ChevronLeft, ChevronRight } from '../icon';
import { useMediaQuery } from '../hooks';
import { Button } from '../button';

import { navigationButtonStyle } from './styles';

const variantMap = {
  previous: {
    label: 'Previous',
    ariaLabel: 'Previous page',
    icon: <ChevronLeft />,
    modifier: -1, // Amount to decrement the currentPage by
  },
  next: {
    label: 'Next',
    ariaLabel: 'Next page',
    icon: <ChevronRight />,
    modifier: 1, // Amount to increment the currentPage by
  },
};

type NavigationProps = {
  navigationVariant: 'previous' | 'next';
  currentPage: number;
  inverted: boolean;
  disabled: boolean;
  onClick: (newPage: number) => void;
};

function Navigation({
  navigationVariant,
  currentPage,
  inverted,
  disabled,
  onClick,
}: NavigationProps) {
  const { isAboveSmall } = useMediaQuery();

  function handleClick() {
    onClick(currentPage + variantMap[navigationVariant].modifier);
  }

  function renderButton(children: React.ReactNode, { ...props }) {
    const { ...restProps } = props;
    return (
      <Button
        {...{
          css: navigationButtonStyle({
            inverted,
            navigationVariant,
          }),
          onClick: handleClick,
          inverted,
          disabled,
          variant: 'plain',
          'aria-label': variantMap[navigationVariant].ariaLabel,
          'data-testid': 'pagination-navigation',
          ...restProps,
        }}
      >
        {children}
      </Button>
    );
  }

  return (
    <li>
      {isAboveSmall
        ? renderButton(variantMap[navigationVariant].label, {
            ...(navigationVariant === 'previous'
              ? { iconLeft: variantMap[navigationVariant].icon }
              : { iconRight: variantMap[navigationVariant].icon }),
          })
        : renderButton(undefined, { icon: variantMap[navigationVariant].icon })}
    </li>
  );
}

export default Navigation;
