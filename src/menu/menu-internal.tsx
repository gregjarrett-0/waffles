import React, {
  useState,
  useRef,
  isValidElement,
  cloneElement,
  Children,
} from 'react';
import {
  useFloating,
  offset as floatingOffset,
  flip,
  useListNavigation,
  useInteractions,
  useClick,
  useDismiss,
  FloatingFocusManager,
  autoUpdate,
} from '@floating-ui/react';

import { tokens } from '../tokens';
import { Portal } from '../portal';
import { useId } from '../hooks';
import { deepChildrenMap } from '../helpers';

import { dropdownStyle } from './styles';
import { MenuProvider } from './menu-context';
import Category from './category';

// Mapping between Waffles and floating-ui placement
const placementMap = {
  bottom: 'bottom',
  top: 'top',
  right: 'right-start',
  left: 'left-start',
  bottomLeft: 'bottom-start',
  bottomRight: 'bottom-end',
  topLeft: 'top-start',
  topRight: 'top-end',
} as const;

type MenuProps = {
  /* The element that will trigger Menu dropdown. In general, [Button](/components/button) from Waffles should be used. */
  trigger: JSX.Element;
  /* Content of the Menu, either `Menu.Category` or custom components. */
  children: React.ReactNode;
  /* Sets the Menu dropdown's position relative to the trigger. */
  /* @default bottomRight */
  placement?:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  /* Sets the distance between Menu dropdown and it's trigger. See [design tokens](/foundation/design-tokens/) for value of default. */
  /* @default tokens.spacing.small */
  offset?: string;
  /* Sets the style of all Menu elements suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function MenuInternal({
  trigger,
  children,
  placement = 'bottomRight',
  offset = tokens.spacing.small,
  inverted = false,
  ...restProps
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerId = `menu-trigger-${useId()}`;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]); // Refs for all menu Items

  const { x, y, reference, floating, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [floatingOffset(parseInt(offset, 10)), flip()],
    placement: placementMap[placement],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context),
      useDismiss(context),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        onNavigate: setActiveIndex,
        loop: true,
      }),
    ],
  );

  // Enhance trigger with a11y aria attributes
  const element = cloneElement(
    trigger,
    getReferenceProps({
      key: trigger.key,
      ref: reference,
      ...trigger.props,
      id: triggerId,
      'aria-haspopup': 'menu',
      ...(isOpen && { 'aria-expanded': true }),
      ...(inverted && { inverted }),
    }),
  );

  // Pass an index to each child of Category, so Menu could be navigated with arrows properly
  function renderItems() {
    let itemIndex = 0;

    return deepChildrenMap(children, (child) => {
      if (isValidElement(child)) {
        if (child.type === Category) {
          // Category is expected to NOT have any nested children
          const enhancedChildren = Children.map(
            child.props.children,
            (child) => {
              return cloneElement(child, {
                index: itemIndex++,
              });
            },
          );

          return cloneElement(child as JSX.Element, {
            children: enhancedChildren,
          });
        }

        return child;
      }

      return null;
    });
  }

  // When Tab key is pressed close menu and return focus to trigger element
  function handleTabOut(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      setIsOpen(false);
      // @ts-expect-error: focus() not recognized
      refs.reference.current?.focus();
    }
  }

  return (
    <MenuProvider
      {...{
        listRef: listItemsRef,
        isOpen,
        setIsOpen,
        getItemProps,
        triggerRef: refs.reference,
        inverted,
      }}
    >
      {element}
      <Portal>
        {isOpen && (
          <FloatingFocusManager context={context}>
            <div
              {...getFloatingProps({
                ref: floating,
                ...restProps,
                onKeyDown: handleTabOut,
              })}
              role="menu"
              aria-labelledby={triggerId}
              css={dropdownStyle({ x, y, inverted })}
            >
              {renderItems()}
            </div>
          </FloatingFocusManager>
        )}
      </Portal>
    </MenuProvider>
  );
}

export default MenuInternal;
