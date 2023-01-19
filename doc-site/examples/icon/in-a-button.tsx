import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { AddCircle, Trash } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
      `}
    >
      <Button variant="destructive" icon={<Trash />} aria-label="Remove item" />
      <Button variant="primary" iconLeft={<AddCircle />}>
        Add Item
      </Button>
    </div>
  );
}

export default Example;
