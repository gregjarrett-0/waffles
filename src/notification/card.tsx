import React, { useRef, cloneElement } from 'react';

import { ScreenReaderOnly } from '../screen-reader-only';
import { Paragraph } from '../paragraph';
import { NotificationCard } from '../notification-card';
import { Heading } from '../heading';

import useInternalLayout from './use-internal-layout';
import {
  notificationStyle,
  contentStyle,
  titleStyle,
  descriptionStyle,
  textContentStyle,
  actionStyle,
} from './styles';
import Notification from './notification';

type CardProps = {
  isVisible: boolean;
  title: string;
  description: React.ReactNode;
  mode: NonNullable<React.ComponentProps<typeof Notification>['mode']>;
  variant: NonNullable<React.ComponentProps<typeof Notification>['variant']>;
  inverted: boolean;
  closable: boolean;
  onClose: () => void;
  closeButton?: JSX.Element;
  action?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

function Card({
  isVisible,
  title,
  description,
  mode,
  variant,
  inverted,
  closable,
  onClose,
  closeButton,
  action,
  ...restProps
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const layout = useInternalLayout(cardRef);
  const isBannerMode = mode === 'banner';

  function renderAnnouncement() {
    switch (variant) {
      case 'success':
        return <ScreenReaderOnly>Success:</ScreenReaderOnly>;
      case 'warning':
        return <ScreenReaderOnly>Warning:</ScreenReaderOnly>;
      case 'error':
        return <ScreenReaderOnly>Error:</ScreenReaderOnly>;
      default:
        return null;
    }
  }

  function renderAction() {
    const isUpgrade = variant === 'upgrade';

    if (action) {
      // Pass inverted and upgrade style flags
      return (
        <div css={actionStyle({ layout, isUpgrade })}>
          {cloneElement(action, {
            inverted,
            isUpgrade,
          })}
        </div>
      );
    }

    return null;
  }

  return (
    <NotificationCard
      {...{
        variant,
        hideLeftDecor: isBannerMode,
        isContentCentered: isBannerMode && layout === 'horizontal',
        inverted,
        closable,
        closeButton,
        onClose,
      }}
      {...restProps}
      ref={cardRef}
      css={notificationStyle({ isBannerMode, variant, inverted, isVisible })}
    >
      <div css={contentStyle({ layout, isBannerMode })}>
        <div css={textContentStyle({ layout })}>
          <Heading as="h2" size="medium" inverted={inverted} css={titleStyle()}>
            {renderAnnouncement()}
            {title}
          </Heading>
          {description && (
            <Paragraph
              variant="primary"
              inverted={inverted}
              css={descriptionStyle()}
            >
              {description}
            </Paragraph>
          )}
        </div>
        {renderAction()}
      </div>
    </NotificationCard>
  );
}

export default Card;
