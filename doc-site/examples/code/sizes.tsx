import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Code } from '@datacamp/waffles/code';

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
      <Code size="large">npm install @datacamp/waffles</Code>
      <Code size="medium">npm install @datacamp/waffles</Code>
      <Code size="small">npm install @datacamp/waffles</Code>
    </div>
  );
}

export default Example;
