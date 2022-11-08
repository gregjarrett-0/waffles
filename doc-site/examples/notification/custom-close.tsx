import { Notification } from '@datacamp/waffles/notification';

function Example() {
  return (
    <Notification
      title="This course has been updated recently"
      closable
      closeButton={<Notification.CloseButton data-trackid="custom track id" />}
    />
  );
}

export default Example;
