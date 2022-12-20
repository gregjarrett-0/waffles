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
  return (
    <div css={wrapperStyle}>
      <Pagination
        aria-label="Pagination with left truncation"
        totalPages={10}
        currentPage={10}
        onChange={() => {
          return;
        }}
        data-testid="pagination-truncation-left"
      />
      <Pagination
        aria-label="Pagination with right truncation"
        totalPages={10}
        currentPage={1}
        onChange={() => {
          return;
        }}
        data-testid="pagination-truncation-right"
      />
      <Pagination
        aria-label="Pagination with both truncation"
        totalPages={10}
        currentPage={5}
        onChange={() => {
          return;
        }}
        data-testid="pagination-truncation-both"
      />
    </div>
  );
}

export default Story;
