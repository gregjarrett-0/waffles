import React from 'react';

import { Text } from '../text';

import { labelStyle, skillTagStyle } from './styles';
import LevelIndicators from './level-indicators';

type SkillTagProps = {
  /* Determines the variant of the Skill Tag. */
  /* @default primary */
  variant?: 'primary' | 'secondary';
  /* Defines the difficulty level of the Skill Tag. */
  /* @default beginner */
  level?: 'beginner' | 'intermediate' | 'advanced';
  /* Sets the style of the Skill Tag to be suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function SkillTag({
  variant = 'primary',
  level = 'beginner',
  inverted = false,
  ...restProps
}: SkillTagProps) {
  // Obtain the associated label based on the difficulty level
  function levelLabel() {
    switch (level) {
      case 'beginner':
        return 'Beginner';
      case 'intermediate':
        return 'Intermediate';
      case 'advanced':
        return 'Advanced';
    }
  }

  return (
    <div {...restProps} css={skillTagStyle()}>
      <LevelIndicators {...{ variant, level, inverted }} />
      <Text css={labelStyle({ variant, inverted })}>{levelLabel()}</Text>
    </div>
  );
}

export default SkillTag;
