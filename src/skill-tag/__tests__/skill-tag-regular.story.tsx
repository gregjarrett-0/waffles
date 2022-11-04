import { css } from '@emotion/react';

import { SkillTag } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  gap: ${tokens.spacing.medium};
  padding: ${tokens.spacing.medium};
`;

const levels = ['beginner', 'intermediate', 'advanced'] as const;
const variants = ['primary', 'secondary'] as const;

function Story() {
  return (
    <div>
      {variants.map((variant) => {
        return (
          <div css={wrapperStyle} key={variant}>
            {levels.map((level) => {
              return (
                <SkillTag
                  key={`${variant}-${level}`}
                  variant={variant}
                  level={level}
                  data-testid="skill-tag"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Story;
