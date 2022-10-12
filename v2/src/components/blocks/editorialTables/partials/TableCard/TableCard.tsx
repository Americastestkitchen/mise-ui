import React from 'react';
import cx from 'classnames';
import { useSwipeable } from 'react-swipeable';

import TableCell from '../TableCell/TableCell';
import styles from './tableCard.module.scss';
import { EditorialTableType, EditorialTableCell } from '../../types';

type TableCardProps = {
  currentPage: number;
  decrementPage: () => void;
  incrementPage: () => void;
  table: EditorialTableType;
};

const TableCard = ({ currentPage, decrementPage, incrementPage, table }: TableCardProps) => {
  const { rows, type } = table;
  const handlers = useSwipeable({
    onSwipedLeft: () => { incrementPage(); },
    onSwipedRight: () => { decrementPage(); },
  });

  return (
    <table className={styles.table}>
      <tbody {...handlers}>
        {
          rows.map((row, rowIndex) => {
            let pageSlice = 0;
            let rowHeader: EditorialTableCell | undefined = undefined;
            if (type === 'comparison') {
              rowHeader = row.cells[0];
              // start at index 1 to ignore row header cells as they're not
              // included in pagination
              pageSlice = 1;
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
                      currentPage={currentPage}
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
                          currentPage={currentPage}
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
