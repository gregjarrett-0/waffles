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
    <div
      css={css`
        background-color: ${tokens.colors.navy};
      `}
    >
      {variants.map((variant) => {
        return (
          <div css={wrapperStyle} key={variant}>
            {levels.map((level) => {
              return (
                <SkillTag
                  key={`inverted-${variant}-${level}`}
                  inverted
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
