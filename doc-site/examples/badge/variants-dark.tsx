import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Badge } from '@datacamp/waffles/badge';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
        flex-wrap: wrap;
      `}
    >
      <Badge variant="white">Label</Badge>
      <Badge variant="greyLight">Label</Badge>
    </div>
  );
}

export default Example;
