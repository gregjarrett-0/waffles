import React from 'react';

import { Text } from '../text';
import { ScreenReaderOnly } from '../screen-reader-only';

import { labelStyle, skillTagStyle } from './styles';
import LevelIndicators from './level-indicators';

type SkillTagProps = {
  /* Determines the variant of the SkillTag. */
  /* @default primary */
  variant?: 'primary' | 'secondary';
  /* Defines the skill level of the SkillTag. */
  /* @default beginner */
  level?: 'beginner' | 'intermediate' | 'advanced';
  /* Sets the style of the SkillTag to be suitable for dark backgrounds. */
  /* @default false */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function SkillTag({
  variant = 'primary',
  level = 'beginner',
  inverted = false,
  ...restProps
}: SkillTagProps) {
  // Obtain the associated label based on the skill level
  function renderLabel() {
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
      <Text css={labelStyle({ variant, inverted })}>
        {renderLabel()}
        <ScreenReaderOnly>Skill Level</ScreenReaderOnly>
      </Text>
    </div>
  );
}

export default SkillTag;
