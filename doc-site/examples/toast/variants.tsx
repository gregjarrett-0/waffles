import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { ToastProvider, useToast } from '@datacamp/waffles/toast';
import { Button } from '@datacamp/waffles/button';

function ToastTriggers() {
  const { toast } = useToast();

  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
        flex-wrap: wrap;
      `}
    >
      <Button
        onClick={() =>
          toast({
            title: 'New Python Workspace',
            description: 'Learn data exploration with Python.',
          })
        }
      >
        Info Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'Message Sent',
            variant: 'success',
          })
        }
      >
        Success Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'Changes Will Affect Your Datasets',
            variant: 'warning',
          })
        }
      >
        Warning Toast
      </Button>
      <Button
        onClick={() =>
          toast({
            title: 'Connection Error',
            variant: 'error',
          })
        }
      >
        Error Toast
      </Button>
    </div>
  );
}

function Example() {
  return (
    <ToastProvider>
      <ToastTriggers />
    </ToastProvider>
  );
}

export default Example;
