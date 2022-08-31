// Words that will never have a capital letter at the start (unless they're the first word)
export const TITLE_CASE_STOP_WORDS = [
  'a',
  'an',
  'the',
  'and',
  'so',
  'as',
  'than',
  'but',
  'that',
  'for',
  'till',
  'if',
  'when',
  'nor',
  'yet',
  'once',
  'or',
  'at',
  'off',
  'by',
  'on',
  'down',
  'onto',
  'for',
  'over',
  'from',
  'past',
  'before',
  'after',
  'in',
  'to',
  'into',
  'upon',
  'near',
  'with',
  'of',
];

function setTitleCase(content: string) {
  return content
    .toLowerCase()
    .trim()
    .split(' ')
    .reduce((output, word, index) => {
      // Always capitalise the first letter of the first word, or if it's not included in our stop words
      if (TITLE_CASE_STOP_WORDS.includes(word) && index) {
        return output.concat(' ', word);
      } else {
        return output.concat(
          !index ? '' : ' ',
          word[0].toUpperCase(),
          word.substring(1),
        );
      }
    }, '');
}

export default setTitleCase;
