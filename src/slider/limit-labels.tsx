import { Text } from '../text';

import { limitLabelsWrapperStyle, limitLabelStyle } from './styles';

type LimitLabelsProps = {
  min: number;
  max: number;
};

function LimitLabels({ min, max }: LimitLabelsProps) {
  return (
    <div css={limitLabelsWrapperStyle()}>
      <Text css={limitLabelStyle()}>{min}</Text>
      <Text css={limitLabelStyle()}>{max}</Text>
    </div>
  );
}

export default LimitLabels;
