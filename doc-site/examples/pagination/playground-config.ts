import { useState } from 'react';
import { Pagination } from '@datacamp/waffles/pagination';

import type { PlaygroundConfig } from '../../types';

const initialCode = `
import { useState } from 'react';


import { Pagination } from '@datacamp/waffles/pagination';

function Playground() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      aria-label="Pagination example"
      totalPages={7}
      currentPage={currentPage}
      onChange={(page: number) => setCurrentPage(page)}
    />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    useState,
    Pagination,
  },
};

export default playgroundConfig;
