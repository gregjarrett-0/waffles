import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { SkillTag } from '@datacamp/waffles/skill-tag';

function Example() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: ${tokens.spacing.small};
      `}
    >
      <SkillTag variant="primary" />
      <SkillTag variant="secondary" />
    </div>
  );
}

export default Example;
