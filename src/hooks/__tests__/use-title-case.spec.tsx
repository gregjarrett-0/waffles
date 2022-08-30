import { render } from '@testing-library/react';

import useTitleCase from '../use-title-case';
import { TITLE_CASE_STOP_WORDS } from '../config/title-case-stops';

function TestComponent() {
  // The original input content to test
  const input = 'the mouse is a small creature but not tiny';
  return <span data-testid="stop-word-wrapper">{useTitleCase(input)}</span>;
}

function StopWordTestComponent() {
  const content = useTitleCase(TITLE_CASE_STOP_WORDS.join(' '));
  return <span data-testid="stop-word-wrapper">{content}</span>;
}

describe('useTitleCase', () => {
  it('converts provided content into correct title case', () => {
    // The expected output from the title case hook
    const output = 'The Mouse Is a Small Creature but Not Tiny';

    const { getByTestId } = render(<TestComponent />);
    const wrapper = getByTestId('stop-word-wrapper');

    expect(wrapper).toHaveTextContent(output);
  });

  it('should not capitalise the first letter of any of the stop words', () => {
    const { getByTestId } = render(<StopWordTestComponent />);

    const wrapper = getByTestId('stop-word-wrapper');
    const allLowerCase = wrapper.textContent
      ?.split(' ')
      .every((word) => word[0] !== word[0]?.toUpperCase());

    expect(allLowerCase).toBeTruthy;
  });
});
