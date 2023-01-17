import { useState } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Dialog } from '@datacamp/waffles/dialog';
import { Button } from '@datacamp/waffles/button';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeButtonOverride={<Dialog.CloseButton data-testid="test-id" />}
      >
        <Dialog.Header>Confirm your case study participation</Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            To be able to participate in the case study, you will need a
            computer with a webcam. If you fail to submit, you will have to wait
            4 weeks before taking the case study again.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={() => setIsOpen(false)}>Cancel</Dialog.Button>
          <Dialog.Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}

export default Example;
