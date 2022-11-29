import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Dialog } from '@datacamp/waffles/dialog';
import { Button } from '@datacamp/waffles/button';

function Example() {
  const [isOpen, setIsOpen] = useState([false, false, false, false, false]);

  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
        flex-wrap: wrap;
      `}
    >
      <Button
        variant="secondary"
        onClick={() => setIsOpen([true, false, false, false, false])}
      >{`Open Info Dialog`}</Button>
      <Dialog
        isOpen={isOpen[0]}
        onClose={() => setIsOpen([false, false, false, false, false])}
      >
        <Dialog.Header mode="decorative" variant="info">
          Title of a Dialog
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button
            variant="secondary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>

      <Button
        variant="secondary"
        onClick={() => setIsOpen([false, true, false, false, false])}
      >{`Open Success Dialog`}</Button>
      <Dialog
        isOpen={isOpen[1]}
        onClose={() => setIsOpen([false, false, false, false, false])}
      >
        <Dialog.Header mode="decorative" variant="success">
          Title of a Dialog
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button
            variant="secondary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>

      <Button
        variant="secondary"
        onClick={() => setIsOpen([false, false, true, false, false])}
      >{`Open Warning Dialog`}</Button>
      <Dialog
        isOpen={isOpen[2]}
        onClose={() => setIsOpen([false, false, false, false, false])}
      >
        <Dialog.Header mode="decorative" variant="warning">
          Title of a Dialog
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button
            variant="secondary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>

      <Button
        variant="secondary"
        onClick={() => setIsOpen([false, false, false, true, false])}
      >{`Open Error Dialog`}</Button>
      <Dialog
        isOpen={isOpen[3]}
        onClose={() => setIsOpen([false, false, false, false, false])}
      >
        <Dialog.Header mode="decorative" variant="error">
          Title of a Dialog
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button
            variant="secondary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>

      <Button
        variant="secondary"
        onClick={() => setIsOpen([false, false, false, false, true])}
      >{`Open Upgrade Dialog`}</Button>
      <Dialog
        isOpen={isOpen[4]}
        onClose={() => setIsOpen([false, false, false, false, false])}
      >
        <Dialog.Header mode="decorative" variant="upgrade">
          Title of a Dialog
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button
            variant="secondary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setIsOpen([false, false, false, false, false])}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default Example;
