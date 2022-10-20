import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Loader } from '@datacamp/waffles/loader';
import { Code } from '@datacamp/waffles/code';
import { Button } from '@datacamp/waffles/button';

type ContentStatus = 'initial' | 'loading' | 'final';

const INITIAL_CONTENT = (
  <Paragraph>
    Click the button below to load new content and notify the screen reader of
    these changes, using <Code>aria-live</Code>.
  </Paragraph>
);
const LOADER_CONTENT = <Loader width="50" aria-label="Loading new content" />;
const FINAL_CONTENT = (
  <Paragraph>
    This content will be announced by the screen reader now the loading has
    finished.
  </Paragraph>
);

function Example() {
  const [status, setStatus] = useState<ContentStatus>('initial');

  function updateContent() {
    if (status === 'initial') {
      setStatus('loading');

      // Timeout before updating content again
      setTimeout(() => {
        setStatus('final');
      }, 3000);
    } else {
      setStatus('initial');
    }
  }

  function renderContent() {
    switch (status) {
      case 'initial':
        return INITIAL_CONTENT;
      case 'loading':
        return LOADER_CONTENT;
      case 'final':
        return FINAL_CONTENT;
    }
  }

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: ${tokens.spacing.small};
        padding: ${tokens.spacing.small};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${tokens.colors.beigeLight};
          border-radius: ${tokens.borderRadius.medium};
          padding: ${tokens.spacing.medium};
          height: 150px;
          width: 100%;
        `}
        aria-live="polite"
      >
        {renderContent()}
      </div>
      <Button
        css={css`
          width: 150px;
        `}
        onClick={updateContent}
        disabled={status === 'loading'}
      >
        {status === 'final' ? 'Reset Example' : 'Update Content'}
      </Button>
    </div>
  );
}

export default Example;
