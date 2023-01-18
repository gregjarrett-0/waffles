import { useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { hexToRgba } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { ErrorBoundary, useError } from '@datacamp/waffles/error-boundary';
import { Button } from '@datacamp/waffles/button';

function ThrowErrorComponent() {
  throw new Error('Very serious error!');
  return <div>Very serious error!</div>;
}

function CustomError() {
  const { error, onReset } = useError();

  return (
    <section
      role="alert"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: ${tokens.spacing.medium};
        background-color: ${hexToRgba(tokens.colors.red, 0.15)};
        border: ${tokens.borderWidth.thin} solid
          ${hexToRgba(tokens.colors.red, tokens.opacity.high)};
        border-radius: ${tokens.borderRadius.medium};
        max-width: 300px;
      `}
    >
      <Heading size="xlarge">Oops, something happened!</Heading>
      {error.message && (
        <Paragraph
          css={css`
            margin-bottom: ${tokens.spacing.medium};
          `}
        >
          {error.message}
        </Paragraph>
      )}
      <Button onClick={onReset}>Retry</Button>
    </section>
  );
}

function Example() {
  const [hasError, setHasError] = useState(false);

  return (
    <ErrorBoundary
      fallback={<CustomError />}
      onReset={() => setHasError(false)}
    >
      <Button onClick={() => setHasError(true)}>Crash &amp; Burn</Button>
      {hasError ? <ThrowErrorComponent /> : null}
    </ErrorBoundary>
  );
}

export default Example;
