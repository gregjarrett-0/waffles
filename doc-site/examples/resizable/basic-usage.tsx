import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Resizable } from '@datacamp/waffles/resizable';
import { Paragraph } from '@datacamp/waffles/paragraph';

const wrapperStyle = css`
  width: 100%;
  height: 200px;
`;

const paragraphStyle = css`
  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
  background-color: ${tokens.colors.greyLight};
  height: 100%;
`;

function Example() {
  return (
    <div css={wrapperStyle}>
      <Resizable>
        <Paragraph css={paragraphStyle}>First Panel</Paragraph>
        <Paragraph css={paragraphStyle}>Second Panel</Paragraph>
      </Resizable>
    </div>
  );
}

export default Example;
