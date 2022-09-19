import React from 'react';
import { EditorialTableCell } from '../../types';
import cx from 'classnames';

import CircularIcon from '../../../../partials/CircularIcon/CircularIcon';
import styles from './tableCell.module.scss';

type TableCellProps = EditorialTableCell & {
  indexInRow: number;
  isInFirstRow?: boolean;
  rowHeaderContent?: string;
  tableType: 'comparison' | 'informational';
};

const TableCell = ({ content, isInFirstRow, rowHeaderContent, tableType, type, indexInRow }: TableCellProps) => {
  const cellClassNames = cx(
    styles.cell,
    styles[type],
    styles[`${tableType}Cell`],
    { [styles.rowHeaderPadding]: type === 'rowHeader' && isInFirstRow },
    { [styles.oobMobile]: indexInRow > 0 },
    { [styles.oobTablet]: indexInRow > 1 },
    { [styles.oobDesktop]: indexInRow > 2 }
  );
  
  const rowHeaderEl = rowHeaderContent ? <p className={styles.inlineRowHeading}>{rowHeaderContent}</p> : null;
  const dividerEl = <hr aria-hidden="true" className={styles.divider} />;

  switch(type) {
    case 'rowHeader':
      return (
        <th className={cellClassNames} >
          {!isInFirstRow ? dividerEl : null}
          {content}
        </th>
      );
    case 'header':
      return (
        <th className={cellClassNames}>
          {rowHeaderEl}
          {content}
        </th>
      );
    case 'icon': 
      // TODO: may need to revisit logic for rendering yes or no icons
      // right now api is set up to return the strings 'yes' or 'no'
      // when icon cell type is selected
      return (
        <td className={cellClassNames}>
          {dividerEl}
          {rowHeaderEl}
          <div className={styles.iconWrapper}>
            <div className={`${styles[content]} ${styles.iconSvg}`}>
              <CircularIcon type={content === 'yes' ? 'checkmark' : 'close'} />
            </div>
            {content}
          </div>
        </td>
      );
    case 'text':
      return (
        <td className={cellClassNames}>
          {dividerEl}
          {rowHeaderEl}
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </td>
      );
    default:
      return (
        <td className={cellClassNames}></td>
      );
  }
};

export default TableCell;
