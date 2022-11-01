import { css } from '@emotion/react';

import { ToastProvider, useToast } from '../index';
import { tokens } from '../../tokens';
import { Button } from '../../button';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function TriggerRegular() {
  const { toast } = useToast();

  return (
    <div css={wrapperStyle}>
      <Button
        onClick={() =>
          toast({
            title: 'Regular Toast Title',
            description: 'Regular Toast description.',
          })
        }
      >
        Show Regular Toast
      </Button>
    </div>
  );
}

function TriggerPersistent() {
  const { toast } = useToast();

  return (
    <div css={wrapperStyle}>
      <Button
        onClick={() =>
          toast({
            title: 'Persistent Toast Title',
            description: 'Persistent Toast description.',
            disableAutoHide: true,
          })
        }
      >
        Show Persistent Toast
      </Button>
    </div>
  );
}

function Story() {
  return (
    <ToastProvider>
      <TriggerRegular />
      <TriggerPersistent />
    </ToastProvider>
  );
}

export default Story;
