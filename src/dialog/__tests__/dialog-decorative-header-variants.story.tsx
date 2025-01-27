import { useState } from 'react';
import { css } from '@emotion/react';

import { Dialog } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Button } from '../../button';

const exampleWrapper = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${tokens.spacing.small};
`;

type DialogVariants = 'info' | 'success' | 'warning' | 'error' | 'upgrade';

function Story() {
  const [openDialog, setOpenDialog] = useState<DialogVariants | null>(null);

  return (
    <div css={exampleWrapper}>
      {/* Info Dialog */}
      <Button onClick={() => setOpenDialog('info')}>Open Info Dialog</Button>
      <Dialog
        isOpen={openDialog === 'info'}
        onClose={() => setOpenDialog(null)}
      >
        <Dialog.Header mode="decorative" variant="info">
          Confirm your case study participation
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            To be able to participate in the case study, you will need a
            computer with a webcam. If you fail to submit, you will have to wait
            4 weeks before taking the case study again.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={() => setOpenDialog(null)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setOpenDialog(null)}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>

      {/* Success Dialog */}
      <Button onClick={() => setOpenDialog('success')}>
        Open Success Dialog
      </Button>
      <Dialog
        isOpen={openDialog === 'success'}
        onClose={() => setOpenDialog(null)}
      >
        <Dialog.Header mode="decorative" variant="success">
          Case study participation confirmation successful
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            You have successfully submitted the case study participation
            confirmation.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={() => setOpenDialog(null)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setOpenDialog(null)}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>

      {/* Warning Dialog */}
      <Button onClick={() => setOpenDialog('warning')}>
        Open Warning Dialog
      </Button>
      <Dialog
        isOpen={openDialog === 'warning'}
        onClose={() => setOpenDialog(null)}
      >
        <Dialog.Header mode="decorative" variant="warning">
          Confirmation due today
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Your case study participation is due today. If you fail to submit,
            you will have to wait 4 weeks before taking the case study again.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={() => setOpenDialog(null)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setOpenDialog(null)}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>

      {/* Error Dialog */}
      <Button onClick={() => setOpenDialog('error')}>Open Error Dialog</Button>
      <Dialog
        isOpen={openDialog === 'error'}
        onClose={() => setOpenDialog(null)}
      >
        <Dialog.Header mode="decorative" variant="error">
          Problem confirming participation
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Something went wrong whilst submitting your confirmation of
            participation, please try again shortly.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={() => setOpenDialog(null)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="primary"
            onClick={() => setOpenDialog(null)}
          >
            Confirm
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>

      {/* Upgrade Dialog */}
      <Button onClick={() => setOpenDialog('upgrade')}>
        Open Upgrade Dialog
      </Button>
      <Dialog
        isOpen={openDialog === 'upgrade'}
        onClose={() => setOpenDialog(null)}
      >
        <Dialog.Header mode="decorative" variant="upgrade">
          Upgrade to Premium
        </Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Upgrade now learn the data skills you need to advance your career
            and write, run, and share data analysis in the cloud, anywhere, any
            time.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Button onClick={() => setOpenDialog(null)}>
            Cancel
          </Dialog.Button>
          <Dialog.Button
            autoFocus
            variant="upgrade"
            onClick={() => setOpenDialog(null)}
          >
            Upgrade
          </Dialog.Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default Story;
