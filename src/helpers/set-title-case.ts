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

function hasUppercase(text: string) {
  for (let index = 0; index < text.length; index += 1) {
    const letter = text[index];
    if (
      letter === letter.toUpperCase() &&
      // Avoid false positives for non-alphabetical characters:
      letter !== letter.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Convert string content into Title Case
 *
 * @param content string, the content to be converted into Title Case
 * @returns content in Title Case
 */
function setTitleCase(content: string) {
  return content.length === 0
    ? content
    : content
        .trim()
        .split(' ')
        .reduce((output, word, index) => {
          const lowercaseWord = word.toLowerCase();

          // Always capitalize the first letter of the first word or if it’s not already capitalised and not included in our stop words
          if (TITLE_CASE_STOP_WORDS.includes(lowercaseWord) && index) {
            return output.concat(' ', lowercaseWord);
          }

          const wordToAppend = hasUppercase(word)
            ? word
            : `${lowercaseWord[0].toUpperCase()}${lowercaseWord.substring(1)}`;

          return output.concat(!index ? '' : ' ', wordToAppend);
        }, '');
}

export default setTitleCase;
