import { indicatorWrapper } from './styles';
import SkillTag from './skill-tag';
import Indicator from './indicator';

const BEGINNER_COUNT = 1;
const INTERMEDIATE_COUNT = 2;
const ADVANCED_COUNT = 3;

type LevelIndicatorsProps = {
  variant: NonNullable<React.ComponentProps<typeof SkillTag>['variant']>;
  level: NonNullable<React.ComponentProps<typeof SkillTag>['level']>;
  inverted: boolean;
};

function LevelIndicators({ variant, level, inverted }: LevelIndicatorsProps) {
  // Return the required number of indicators, based on the difficulty level
  function getIndicatorCount() {
    switch (level) {
      case 'advanced':
        return ADVANCED_COUNT;
      case 'intermediate':
        return INTERMEDIATE_COUNT;
      default:
        return BEGINNER_COUNT;
    }
  }

  return (
    <div css={indicatorWrapper()}>
      {[...Array(getIndicatorCount())].map((x) => (
        <Indicator key={x} {...{ variant, inverted }} />
      ))}
    </div>
  );
}

export default LevelIndicators;
