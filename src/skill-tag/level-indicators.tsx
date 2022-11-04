import { indicatorWrapper } from './styles';
import SkillTag from './skill-tag';
import Indicator from './indicator';

const indicatorsCount = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
};

type LevelIndicatorsProps = {
  variant: NonNullable<React.ComponentProps<typeof SkillTag>['variant']>;
  level: NonNullable<React.ComponentProps<typeof SkillTag>['level']>;
  inverted: boolean;
};

function LevelIndicators({ variant, level, inverted }: LevelIndicatorsProps) {
  return (
    <div css={indicatorWrapper()}>
      {Array.from({ length: indicatorsCount[level] }, (_, index) => {
        return (
          <Indicator key={`indicator-${index}`} {...{ variant, inverted }} />
        );
      })}
    </div>
  );
}

export default LevelIndicators;
