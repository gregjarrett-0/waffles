import { useState } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Chat } from '@datacamp/waffles/icon';
import { Dialog } from '@datacamp/waffles/dialog';
import { Button } from '@datacamp/waffles/button';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Header
          mode="decorative"
          variant="info"
          customIconOverride={<Chat />}
        >
          Title of a Dialog
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setIsOpen(false)}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}

export default Example;
