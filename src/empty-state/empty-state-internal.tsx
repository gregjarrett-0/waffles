import { useRef } from 'react';

import { Heading } from '../heading';

import useHasSmallWidth from './use-has-small-width';
import {
  contentWrapperStyle,
  emptyStateStyle,
  headingStyle,
  imageStyle,
} from './styles';

type EmptyStateBaseProps = {
  /* Image next to or above content, depending on `orientation`. In general, pass Waffles [Asset](/components/asset). */
  image?: JSX.Element;
  /* Content of the component, can include `EmptyState.List` and any Waffles or custom component. */
  children?: React.ReactNode;
  /* Title for the content. */
  title?: React.ReactNode;
  /* Specifies in which layout the component is organised. Note: Small screen sizes will always show as vertical.  */
  /* @default horizontal */
  orientation?: 'horizontal' | 'vertical';
  /* Whether the content should be center aligned. **Note**: Can only be true when `orientation` is set to `vertical`. */
  /* @default false */
  isCentered?: boolean;
  /* Sets the color of all internal child elements to be suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

// Additional type to handle restricting `isCentered` to only be usable when it the orientation is vertical
type EmptyStateDirectionCenteredProps =
  | {
      orientation?: 'horizontal' | undefined;
      isCentered?: never;
    }
  | {
      orientation: 'vertical';
      isCentered?: boolean;
    };

function EmptyStateInternal({
  image,
  children,
  title,
  orientation = 'horizontal',
  isCentered = false,
  inverted = false,
  ...restProps
}: EmptyStateBaseProps & EmptyStateDirectionCenteredProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasSmallWidth = useHasSmallWidth(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      css={emptyStateStyle({
        orientation: hasSmallWidth ? 'vertical' : orientation,
        isCentered: !!isCentered,
        inverted,
      })}
      {...restProps}
    >
      {image && <div css={imageStyle({ hasSmallWidth })}>{image}</div>}
      <div css={contentWrapperStyle()}>
        {title && (
          <Heading css={headingStyle()} size="xlarge" inverted={inverted}>
            {title}
          </Heading>
        )}
        {children}
      </div>
    </div>
  );
}

export default EmptyStateInternal;
