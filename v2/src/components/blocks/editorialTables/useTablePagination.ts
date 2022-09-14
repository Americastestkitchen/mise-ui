import { useCallback, useState } from 'react';
import { EditorialTable } from './types';

export default function useTablePagination(table: EditorialTable) {
  const [page, setPage] = useState(0);

  const incrementPage = useCallback(() => {
    setPage((prevPage) => prevPage < table[0].cells.length - 1 ? prevPage + 1 : prevPage);
  }, [table]);

  const decrementPage = useCallback(() => {
    setPage((prevPage) => prevPage > 0 ? prevPage - 1 : prevPage);
  }, []);

  return {
    decrementPage,
    incrementPage,
    page,
  };
};
