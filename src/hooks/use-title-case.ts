import { useState, useEffect } from 'react';

import { TITLE_CASE_STOP_WORDS } from './config/title-case-stops';

function useTitleCase(content: string) {
  const [titleCasedContent, setTitleCasedContent] = useState<string>();

  useEffect(() => {
    if (!content) return;

    setTitleCasedContent(
      content
        .toLowerCase()
        .trim()
        .split(' ')
        .reduce((output, word, index) => {
          // Always capitalise the first letter of the first word, or if it's not included in our stop words
          if (TITLE_CASE_STOP_WORDS.includes(word) && index) {
            return output.concat(' ', word);
          } else {
            return output.concat(' ', word[0].toUpperCase(), word.substring(1));
          }
        }, ''),
    );
  }, [content]);

  return titleCasedContent;
}
export default useTitleCase;
