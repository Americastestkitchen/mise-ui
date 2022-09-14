import React from 'react';

import ProgressHeader from '../partials/ProgressHeader/ProgressHeader';
import TableCard from '../partials/TableCard/TableCard';
import styles from './informationalTable.module.scss';
import useTablePagination from '../useTablePagination';
import { EditorialTable } from '../types';

type InformationalTableProps = {
  description?: string;
  heading: string;
  table: EditorialTable;
};

const InformationalTable = ({ description, heading, table }: InformationalTableProps) => {
  const { decrementPage, incrementPage, page } = useTablePagination(table);

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
        maxPage={table[0].cells.length}
      />
      <TableCard
        currentPage={page}
        table={table}
      />
    </div>
  );
};

export default InformationalTable;
