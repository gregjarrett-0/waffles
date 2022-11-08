import { NotificationCard } from '../notification-card';

import NotificationInternal from './notification-internal';
import ActionButton from './action-button';

const NotificationNamespace = Object.assign(NotificationInternal, {
  ActionButton,
  CloseButton: NotificationCard.CloseButton,
});

export default NotificationNamespace;
