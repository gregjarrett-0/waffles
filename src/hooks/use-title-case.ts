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
        .reduce((output, segment, index) => {
          // Always capitalise the first letter of the first word, or if it's not included in our stop words
          if (TITLE_CASE_STOP_WORDS.includes(segment) && index) {
            return output.concat(' ', segment);
          } else {
            return output.concat(
              ' ',
              segment[0].toUpperCase(),
              segment.substring(1),
            );
          }
        }, ''),
    );
  }, [content]);

  return titleCasedContent;
}
export default useTitleCase;
