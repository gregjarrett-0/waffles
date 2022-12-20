import { useState } from 'react';
import { css } from '@emotion/react';

import { Pagination } from '../index';
import { tokens } from '../../tokens';

const wrapperStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div css={wrapperStyle}>
      <Pagination
        inverted
        aria-label="Inverted pagination"
        totalPages={7}
        currentPage={currentPage}
        onChange={(page: number) => setCurrentPage(page)}
        data-testid="pagination"
      />
    </div>
  );
}

export default Story;
