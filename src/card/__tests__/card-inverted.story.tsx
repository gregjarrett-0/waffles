import { css } from '@emotion/react';

import { Card } from '../index';
import { tokens } from '../../tokens';
import { Paragraph } from '../../paragraph';
import { Heading } from '../../heading';
import { Button } from '../../button';
import { PowerBiLogomark } from '../../asset';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
  padding-top: ${tokens.spacing.xlarge};
  background-color: ${tokens.colors.navy};
`;

function Story() {
  return (
    <div css={wrapperStyle}>
      <Card
        inverted
        headstone={<Card.HeadstoneItem content={<PowerBiLogomark />} />}
        css={css`
          width: 600px;
        `}
      >
        <Heading inverted size="large">
          Inverted card
        </Heading>
        <Paragraph inverted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
        <Button inverted>Action</Button>
      </Card>
    </div>
  );
}

export default Story;
