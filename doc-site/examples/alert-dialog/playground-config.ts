import { useState } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';
import { AlertDialog } from '@datacamp/waffles/alert-dialog';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { useState } from 'react';

import { AlertDialog } from '@datacamp/waffles/alert-dialog';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';

function Playground() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Alert Dialog</Button>
      <AlertDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <AlertDialog.Header>
          Alert dialog title
        </AlertDialog.Header>
        <AlertDialog.Body>
          <Paragraph>
            Content of an alert dialog should be rather short.
            This type of dialog is used to notify the user of urgent
            information that demands immediate attention.
          </Paragraph>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <AlertDialog.Button
            variant="primary"
            autoFocus
            onClick={() => setIsOpen(false)}
          >
            Got It
          </AlertDialog.Button>
        </AlertDialog.Footer>
      </AlertDialog>
    </>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    AlertDialog,
    Paragraph,
    Button,
  },
};

export default playgroundConfig;
