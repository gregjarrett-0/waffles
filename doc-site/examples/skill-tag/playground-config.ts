import { SkillTag } from '@datacamp/waffles/skill-tag';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { SkillTag } from '@datacamp/waffles/skill-tag';

function Playground() {
  return (
    <SkillTag variant="primary" level="beginner" />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    SkillTag,
  },
};

export default playgroundConfig;
