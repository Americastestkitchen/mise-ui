import React, { useCallback, useState } from 'react';

import ProgressHeader from '../partials/ProgressHeader/ProgressHeader';
import TableCard from '../partials/TableCard/TableCard';
import styles from './editorialTable.module.scss';
import { EditorialTableType } from '../types';

type EditorialTableProps = {
  description?: string;
  heading: string;
  table: EditorialTableType;
};

const EditorialTable = ({ description, heading, table }: EditorialTableProps) => {
  const { rows, type } = table;
  const firstRowCells = rows[0].cells;
  // Subtract a page for comparison table because row header column
  // is not included in pagination.
  const maxPage = type === 'informational' ? firstRowCells.length : firstRowCells.length - 1;

  const [page, setPage] = useState(0);

  const incrementPage = useCallback(() => {
    setPage((prevPage) => prevPage < maxPage - 1 ? prevPage + 1 : prevPage);
  }, [maxPage]);

  const decrementPage = useCallback(() => {
    setPage((prevPage) => prevPage > 0 ? prevPage - 1 : prevPage);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.heading}>{heading}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <ProgressHeader
        currentPage={page}
        decrementPage={decrementPage}
        incrementPage={incrementPage}
        maxPage={maxPage}
      />
      <TableCard
        currentPage={page}
        table={table}
      />
    </div>
  );
};

export default EditorialTable;
