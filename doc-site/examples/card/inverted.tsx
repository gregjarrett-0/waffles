import { css } from '@emotion/react';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Heading } from '@datacamp/waffles/heading';
import { Card } from '@datacamp/waffles/card';
import { PowerBiLogomark } from '@datacamp/waffles/asset';

function Example() {
  return (
    <Card
      inverted
      headstone={<Card.HeadstoneAvatar content={<PowerBiLogomark />} />}
      css={css`
        margin-top: 20px;
      `}
    >
      <Heading inverted size="large">
        Power BI fundamentals
      </Heading>
      <Paragraph
        inverted
        css={css`
          margin-bottom: 0;
        `}
      >
        You will ramp up your skills by learning how to prepare data in Power
        Query before getting introduced to the topic of Data Modeling, and have
        all the important basic Power BI skills under your belt.
      </Paragraph>
    </Card>
  );
}

export default Example;
