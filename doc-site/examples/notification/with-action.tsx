import { Notification } from '@datacamp/waffles/notification';

function Example() {
  return (
    <Notification
      title="Terms of use have been updated"
      action={
        <Notification.ActionButton
          as="a"
          href="https://www.datacamp.com/terms-of-use"
        >
          Check What Changed
        </Notification.ActionButton>
      }
      variant="warning"
    />
  );
}

export default Example;
