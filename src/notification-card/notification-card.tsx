import { forwardRef } from 'react';

import NotificationCardInternal from './notification-card-internal';
import CloseButton from './close-button';

const NotificationCard = forwardRef(NotificationCardInternal);

const NotificationCardNamespace = Object.assign(NotificationCard, {
  CloseButton,
});

export default NotificationCardNamespace;
