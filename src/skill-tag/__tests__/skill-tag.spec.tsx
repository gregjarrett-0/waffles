import { render } from '@testing-library/react';

import { SkillTag } from '../index';

const levels = ['beginner', 'intermediate', 'advanced'] as const;
const variants = ['primary', 'secondary'] as const;

describe('Skill Tag', () => {
  it('sets the data attribute on the Skill Tag', () => {
    const { getByTestId } = render(<SkillTag data-testid="skill-tag" />);

    const skillTag = getByTestId('skill-tag');

    expect(skillTag).toBeInTheDocument();
  });

  it('shows the correct number of indicators when set to beginner level', () => {
    const { getAllByTestId } = render(<SkillTag level="beginner" />);

    const levelIndicators = getAllByTestId('skill-tag-indicator');
    expect(levelIndicators).toHaveLength(1);
  });

  it('shows the correct number of indicators when set to intermediate level', () => {
    const { getAllByTestId } = render(<SkillTag level="intermediate" />);

    const levelIndicators = getAllByTestId('skill-tag-indicator');
    expect(levelIndicators).toHaveLength(2);
  });

  it('shows the correct number of indicators when set to advanced level', () => {
    const { getAllByTestId } = render(<SkillTag level="advanced" />);

    const levelIndicators = getAllByTestId('skill-tag-indicator');
    expect(levelIndicators).toHaveLength(3);
  });

  it('shows the correct label when set to beginner level', () => {
    const { getByText } = render(<SkillTag level="beginner" />);

    const difficultyLabel = getByText('Beginner');
    expect(difficultyLabel).toBeInTheDocument();
  });

  it('shows the correct label when set to intermediate level', () => {
    const { getByText } = render(<SkillTag level="intermediate" />);

    const difficultyLabel = getByText('Intermediate');
    expect(difficultyLabel).toBeInTheDocument();
  });

  it('shows the correct label when set to advanced level', () => {
    const { getByText } = render(<SkillTag level="advanced" />);

    const difficultyLabel = getByText('Advanced');
    expect(difficultyLabel).toBeInTheDocument();
  });

  describe('renders snapshot of', () => {
    variants.forEach((variant) => {
      levels.forEach((level) => {
        it(`variant ${variant} and size ${level}`, () => {
          const { container } = render(
            <SkillTag variant={variant} level={level} />,
          );

          const skillTag = container.firstChild;
          expect(skillTag).toMatchSnapshot();
        });
      });
    });
  });

  describe('renders snapshot of inverted', () => {
    variants.forEach((variant) => {
      levels.forEach((level) => {
        it(`inverted variant ${variant} and size ${level}`, () => {
          const { container } = render(
            <SkillTag inverted variant={variant} level={level} />,
          );

          const skillTag = container.firstChild;
          expect(skillTag).toMatchSnapshot();
        });
      });
    });
  });
});
