import { Text } from '../text';

import { limitLabelsWrapperStyle, limitLabelStyle } from './styles';

type LimitLabelsProps = {
  min: number;
  max: number;
  inverted: boolean;
};

function LimitLabels({ min, max, inverted }: LimitLabelsProps) {
  return (
    <div css={limitLabelsWrapperStyle()}>
      <Text css={limitLabelStyle({ inverted })}>{min}</Text>
      <Text css={limitLabelStyle({ inverted })}>{max}</Text>
    </div>
  );
}

export default LimitLabels;
