import { useState } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Dialog } from '@datacamp/waffles/dialog';
import { Button } from '@datacamp/waffles/button';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { useState } from 'react';

import { Dialog } from '@datacamp/waffles/dialog';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';

function Playground() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Header>
          Dialog title
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Main content of the dialog. Even very long content is supported.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={() => setIsOpen(false)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button
            onClick={() => setIsOpen(false)}
          >
            Secondary Action
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
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Dialog,
    Paragraph,
    Button,
  },
};

export default playgroundConfig;
