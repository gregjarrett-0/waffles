import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { BarChart, DataCampBrand } from '@datacamp/waffles/icon';
import { Heading } from '@datacamp/waffles/heading';
import { Avatar } from '@datacamp/waffles/avatar';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.small};
  flex-wrap: wrap;
  margin-bottom: ${tokens.spacing.medium};
`;

function Example() {
  return (
    <>
      <Heading size="medium" inverted>
        Text content
      </Heading>
      <div css={wrapperStyle}>
        <Avatar variant="white" content="D" />
        <Avatar variant="greyLight" content="D" />
      </div>

      <Heading size="medium" inverted>
        Icon content
      </Heading>
      <div
        css={css`
          ${wrapperStyle}
          margin-bottom: 0;
        `}
      >
        <Avatar variant="white" content={<DataCampBrand />} />
        <Avatar variant="greyLight" content={<BarChart />} />
      </div>
    </>
  );
}

export default Example;
