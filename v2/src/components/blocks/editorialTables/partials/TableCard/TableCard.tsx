import React from 'react';
import cx from 'classnames';

import TableCell from '../TableCell/TableCell';
import styles from './tableCard.module.scss';
import { EditorialTableType, EditorialTableCell } from '../../types';

type TableCardProps = {
  currentPage: number;
  table: EditorialTableType;
};

const TableCard = ({ currentPage, table }: TableCardProps) => {
  const { rows, type } = table;
  return (
    <table className={styles.table}>
      <tbody>
        {
          rows.map((row, rowIndex) => {
            let pageSlice = currentPage;
            let rowHeader: EditorialTableCell | undefined = undefined;
            if (type === 'comparison') {
              rowHeader = row.cells[0];
              pageSlice = currentPage + 1;
            }
            const rowClassNames = cx(
              'editorial-table-row',
              styles.row,
            );
            return (
              <tr className={rowClassNames} key={row.id}>
                {
                  rowHeader ? (
                    <TableCell
                      {...rowHeader}
                      isInFirstRow={rowIndex === 0}
                      indexInRow={0}
                      tableType={type}
                    />
                  ) : null
                }
                <>
                  {
                    row.cells.slice(pageSlice).map((cell, index) => {
                      return (
                        <TableCell
                          {...cell}
                          key={cell.id}
                          rowHeaderContent={typeof rowHeader?.content === 'string' ? rowHeader.content : undefined}
                          indexInRow={index}
                          tableType={type}
                        />
                      )
                  })}
                </>
              </tr>
            );
          })
        }
      </tbody>
    </table>

  );
};

export default TableCard;
