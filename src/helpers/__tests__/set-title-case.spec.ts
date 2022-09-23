import setTitleCase, {
  TITLE_CASE_STOP_WORDS,
} from '../../helpers/set-title-case';

describe('setTitleCase', () => {
  it('converts provided content into correct title case', () => {
    // The original input content to test
    const input = 'the mouse is a small creature but not tiny';
    // The expected output from the title case hook
    const output = 'The Mouse Is a Small Creature but Not Tiny';

    expect(setTitleCase(input)).toMatch(output);
  });

  it('should not capitalise the first letter of any of the stop words', () => {
    const allLowerCase = setTitleCase(TITLE_CASE_STOP_WORDS.join(' '))
      .split(' ')
      .every((word: string) => word[0] !== word[0]?.toUpperCase());

    expect(allLowerCase).toBeTruthy;
  });

  it('should work with an empty string', () => {
    expect(setTitleCase('')).toMatch('');
  });
});
