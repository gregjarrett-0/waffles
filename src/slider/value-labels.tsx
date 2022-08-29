import { Text } from '../text';

import { valueLabelsWrapperStyle, valueLabelStyle } from './styles';

type ValueLabelsProps = {
  value: number[];
  inverted: boolean;
};

function ValueLabels({ value, inverted }: ValueLabelsProps) {
  const isSingleValue = value.length === 1;

  return (
    <div css={valueLabelsWrapperStyle({ isSingleValue })}>
      <Text css={valueLabelStyle({ inverted })}>{value[0]}</Text>
      {!isSingleValue && (
        <Text css={valueLabelStyle({ inverted })}>{value[1]}</Text>
      )}
    </div>
  );
}

export default ValueLabels;
