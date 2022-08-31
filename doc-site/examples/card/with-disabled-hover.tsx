import { css } from '@emotion/react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';

function Example() {
  return (
    <Card disableHoverEffect>
      <Heading size="large">Card with hover effect disabled</Heading>
      <Paragraph
        css={css`
          margin-bottom: 0;
        `}
      >
        It is possible to disable on hover drop shadow visual indicator for the
        very basic cards.
      </Paragraph>
    </Card>
  );
}

export default Example;
