import { indicatorStyle } from './styles';
import SkillTag from './skill-tag';

type IndicatorProps = {
  variant: NonNullable<React.ComponentProps<typeof SkillTag>['variant']>;
  inverted: boolean;
};

function Indicator({ variant, inverted }: IndicatorProps) {
  return <span css={indicatorStyle({ variant, inverted })} />;
}

export default Indicator;
