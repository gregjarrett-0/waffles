import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Link } from '@datacamp/waffles/link';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: ${tokens.spacing.small};
      `}
    >
      <Link size="large" href="https://datacamp.com/">
        Large Size
      </Link>
      <Link size="medium" href="https://datacamp.com/">
        Medium Size
      </Link>
      <Link size="small" href="https://datacamp.com/">
        Small Size
      </Link>
    </div>
  );
}

export default Example;
