import { css } from '@emotion/react';
import { Tooltip } from '@datacamp/waffles/tooltip';
import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';

const highlightStyle = css`
  color: ${tokens.colors.green};
`;

function Example() {
  return (
    <Tooltip
      content={
        <>
          Always keep tooltip&apos;s content{' '}
          <span css={highlightStyle}>short</span> and{' '}
          <span css={highlightStyle}>simple</span>.
        </>
      }
      placement="bottomLeft"
    >
      <Button>Tooltip Trigger</Button>
    </Tooltip>
  );
}

export default Example;
