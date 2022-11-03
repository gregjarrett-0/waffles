import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { SkillTag } from '@datacamp/waffles/skill-tag';

function Example() {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: ${tokens.spacing.small};
        `}
      >
        <SkillTag level="beginner" />
        <SkillTag level="intermediate" />
        <SkillTag level="advanced" />
      </div>
    </>
  );
}

export default Example;
