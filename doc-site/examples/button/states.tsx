import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { AddCircle } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
      `}
    >
      <Button>No State</Button>
      <Button disabled>Disabled</Button>
      <Button isLoading>Original Label</Button>
      <Button isLoading icon={<AddCircle />} aria-label="Icon-only Button" />
    </div>
  );
}

export default Example;
