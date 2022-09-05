import { Text } from '../text';

import { rangeLabelsWrapperStyle, rangeLabelStyle } from './styles';
import { useSlider } from './slider-context';

type RangeLabelsProps = {
  formatLabel: (value: number) => number | string;
};

function RangeLabels({ formatLabel }: RangeLabelsProps) {
  const { min, max, inverted } = useSlider();

  return (
    <div css={rangeLabelsWrapperStyle()}>
      <Text css={rangeLabelStyle({ inverted })}>{formatLabel(min)}</Text>
      <Text css={rangeLabelStyle({ inverted })}>{formatLabel(max)}</Text>
    </div>
  );
}

export default RangeLabels;
