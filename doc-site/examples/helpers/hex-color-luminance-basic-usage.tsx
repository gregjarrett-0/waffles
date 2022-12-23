import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { hexColorLuminance } from '@datacamp/waffles/helpers';

const wrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${tokens.spacing.small};
`;

const cardStyle = css`
  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
`;

const textStyle = css`
  font-weight: ${tokens.fontWeights.bold};
`;

type ColorCardProps = {
  backgroundColor: string;
};

function ColorCard({ backgroundColor }: ColorCardProps) {
  return (
    <div
      css={css`
        ${cardStyle}
        background-color: ${backgroundColor};
      `}
    >
      <Text as="p">
        Luminance:{' '}
        <span css={textStyle}>{hexColorLuminance(backgroundColor)}</span>
      </Text>
    </div>
  );
}

function Example() {
  return (
    <div css={wrapperStyle}>
      <ColorCard backgroundColor={tokens.colors.greySubtle} />
      <ColorCard backgroundColor={tokens.colors.grey} />
      <ColorCard backgroundColor={tokens.colors.greyMedium} />
    </div>
  );
}

export default Example;
