import React from 'react';

import CircularIcon from '../../../../partials/CircularIcon/CircularIcon';
import styles from './tableCard.module.scss';
import { EditorialTable } from '../../types';

type TableCardProps = {
  currentPage: number;
  table: EditorialTable;
};

const TableCard = ({ currentPage, table }: TableCardProps) => (
  <table className={styles.table}>
    <tbody>
      {
        table.map(row => (
          <tr className={styles.row} key={row.id}>
            {row.cells.slice(currentPage).map((cell, index: number) => {
              const { content, id, type } = cell;
              const cellClassNames = `${index >= 3 && styles.oob} ${styles.cell} ${styles[type]}`;
              switch(type) {
                case 'header':
                  return (
                    <th className={cellClassNames} key={id}>
                      {content}
                    </th>
                  );
                case 'icon': 
                  // TODO: may need to revisit logic for rendering yes or no icons
                  // right now api is set up to return the strings 'yes' or 'no'
                  // when icon cell type is selected
                  return (
                    <td className={cellClassNames} key={id}>
                      <hr aria-hidden="true" className={styles.divider} />
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
                    <td className={cellClassNames} key={id}>
                      <hr aria-hidden="true" className={styles.divider}/>
                      <span dangerouslySetInnerHTML={{ __html: content }} />
                    </td>
                  );
                default:
                  return (
                    <td key={id} className={cellClassNames}></td>
                  );
              }
            })}
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default TableCard;
