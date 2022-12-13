import { ToastProvider, useToast } from '@datacamp/waffles/toast';
import { Button } from '@datacamp/waffles/button';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { Button } from '@datacamp/waffles/button';
import { ToastProvider, useToast } from '@datacamp/waffles/toast';

function Playground() {
  function ToastTrigger() {
    const { toast } = useToast();

    return (
      <Button
        onClick={() =>
          toast({
            title: 'Short Toast Title',
            description: 'Keep title and description as short as possible.',
            variant: 'info'
          })
        }
      >
        Open Custom Toast
      </Button>
    );
  }

  return (
    <ToastProvider
      autoHideDuration={6000}
      disableAutoHide={false}
      offset="54px"
    >
      <ToastTrigger />
    </ToastProvider>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Button,
    ToastProvider,
    useToast,
  },
};

export default playgroundConfig;
