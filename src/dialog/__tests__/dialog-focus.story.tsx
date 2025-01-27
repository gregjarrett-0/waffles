/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';

import { Dialog } from '../index';
import { Paragraph } from '../../paragraph';

function Story() {
  const [showUpdatedContent, setShowUpdatedContent] = useState(false);

  return (
    <Dialog isOpen={true} onClose={() => {}}>
      <Dialog.Header>Taylor Swift discography</Dialog.Header>
      <Dialog.Body>
        <Paragraph>
          {showUpdatedContent ? 'Updated content' : 'Initial content'}
        </Paragraph>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.Button onClick={() => setShowUpdatedContent(true)}>
          Update Content
        </Dialog.Button>
        <Dialog.Button variant="primary" onClick={() => {}}>
          Dismiss
        </Dialog.Button>
      </Dialog.Footer>
    </Dialog>
  );
}

export default Story;
