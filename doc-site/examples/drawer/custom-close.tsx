import { useState } from 'react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Drawer } from '@datacamp/waffles/drawer';
import { Button } from '@datacamp/waffles/button';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeButtonOverride={<Drawer.CloseButton data-testid="test-id" />}
      >
        <Drawer.Header>Drawer title</Drawer.Header>
        <Drawer.Body>
          <Paragraph>
            Main content of the drawer. Even very long content is supported.
          </Paragraph>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Drawer.Button>
          <Drawer.Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Drawer.Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}

export default Example;
