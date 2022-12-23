import { useState } from 'react';
import { css } from '@emotion/react';

import { Pagination } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding: ${tokens.spacing.medium};
  gap: ${tokens.spacing.small};
`;

function Story() {
  const [activePages, setActivePages] = useState<number[]>([10, 1, 5]);

  function updateActivePage(paginationIndex: number, page: number) {
    const currentPages = [...activePages];
    currentPages[paginationIndex] = page;
    setActivePages(currentPages);
  }

  return (
    <div css={wrapperStyle}>
      <Pagination
        aria-label="Pagination with left truncation"
        totalPages={10}
        currentPage={activePages[0]}
        onChange={(page: number) => updateActivePage(0, page)}
        data-testid="pagination-truncation-left"
      />
      <Pagination
        aria-label="Pagination with right truncation"
        totalPages={10}
        currentPage={activePages[1]}
        onChange={(page: number) => updateActivePage(1, page)}
        data-testid="pagination-truncation-right"
      />
      <Pagination
        aria-label="Pagination with both truncation"
        totalPages={10}
        currentPage={activePages[2]}
        onChange={(page: number) => updateActivePage(2, page)}
        data-testid="pagination-truncation-both"
      />
    </div>
  );
}

export default Story;
