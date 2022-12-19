import { useState } from 'react';
import { Pagination } from '@datacamp/waffles/pagination';

function Example() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      aria-label="Basic pagination example"
      totalPages={10}
      currentPage={currentPage}
      onChange={(page: number) => setCurrentPage(page)}
    />
  );
}

export default Example;
