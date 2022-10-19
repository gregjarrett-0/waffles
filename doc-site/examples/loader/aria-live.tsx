import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Loader } from '@datacamp/waffles/loader';
import { Code } from '@datacamp/waffles/code';
import { Button } from '@datacamp/waffles/button';

const initialContent = (
  <Paragraph>
    Click the button below to load new content and notify the screen reader of
    these changes, using <Code>aria-live</Code>.
  </Paragraph>
);
const loader = <Loader width="50" aria-label="Loading new content" />;
const newContent = (
  <Paragraph>
    This content will be announced by the screen reader now the loading has
    finished.
  </Paragraph>
);

function Example() {
  const [content, setContent] = useState(initialContent);
  const [isResetButton, setIsResetButton] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  function updateContent() {
    if (content === initialContent) {
      setIsDisabled(true);
      setContent(loader);

      // Timeout before updating content again
      setTimeout(() => {
        setIsDisabled(false);
        setIsResetButton(true);
        setContent(newContent);
      }, 3000);
    } else {
      setIsDisabled(false);
      setIsResetButton(false);
      setContent(initialContent);
    }
  }

  return (
    <>
      <div
        aria-live="polite"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: ${tokens.spacing.small};
          height: 150px;
        `}
      >
        {content}
      </div>
      <Button onClick={updateContent} disabled={isDisabled}>
        {isResetButton ? 'Reset Example' : 'Update Content'}
      </Button>
    </>
  );
}

export default Example;
