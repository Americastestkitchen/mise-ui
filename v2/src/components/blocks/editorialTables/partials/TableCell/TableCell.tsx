import React from 'react';
import { EditorialTableCell } from '../../types';
import cx from 'classnames';

import CircularIcon from '../../../../partials/CircularIcon/CircularIcon';
import styles from './tableCell.module.scss';
import Sticker from '../../../../partials/Sticker/Sticker';

type TableCellProps = EditorialTableCell & {
  currentPage: number;
  indexInRow: number;
  isInFirstRow?: boolean;
  rowHeaderContent?: string;
  tableType: 'comparison' | 'informational';
};

const TableCell = ({ content, currentPage, isInFirstRow, rowHeaderContent, tableType, type, indexInRow }: TableCellProps) => {
  const distanceFromCurrentPage = type !== 'rowHeader' ? indexInRow - currentPage : 0;
  const cellClassNames = cx(
    type.includes('Header') ? 'editorial-table-header-cell' : 'editorial-table-data-cell',
    styles.cell,
    styles[type],
    styles[`${tableType}Cell`],
    { [styles.negativeMargin]: type !== 'rowHeader' && indexInRow < currentPage },
    { [styles.rowHeaderPadding]: type === 'rowHeader' && isInFirstRow },
    { [styles.oobMobile]: distanceFromCurrentPage >= 1 },
    { [styles.oobTablet]: distanceFromCurrentPage >= 2 },
    { [styles.oobDesktop]: distanceFromCurrentPage >= 3 }
  );

  const cellContentClassNames = cx(
    styles.content,
    styles.divider,
  );
  
  const rowHeaderEl = rowHeaderContent ? <p className={styles.inlineRowHeading}>{rowHeaderContent}</p> : null;

  switch(type) {
    case 'rowHeader':
      const rowHeaderContentClassNames = cx(
        styles.content,
        { [styles.divider]: !isInFirstRow },
      );
      return (
        <th className={cellClassNames}>
          <div className={rowHeaderContentClassNames}>
            {content}
          </div>
        </th>
      );
    case 'colHeaderDetailed':
      const { affiliate, image, stickerText, title} = content;
      return (
        <th className={cellClassNames}>
          {rowHeaderEl}
          {image ? <img alt={image.altText ?? ''} className={styles.chdImage} src={image.cloudinaryUrl} /> : null}
          {stickerText ? <Sticker text={stickerText} type="editorial" /> : null}
          <span className={styles.chdTitle}>{title}</span>
          {
            affiliate ? (
              <a className={styles.affiliate} href={affiliate.url}>
                {affiliate.text} <span className={styles.affiliateArrow}>▸</span>
              </a> 
            ) : null
          }
        </th>
      );
    case 'colHeader':
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
          <div className={cellContentClassNames}>
            {rowHeaderEl}
            <div className={styles.iconWrapper}>
              <div className={`${styles[content]} ${styles.iconSvg}`}>
                <CircularIcon type={content === 'yes' ? 'checkmark' : 'close'} />
              </div>
              {content}
            </div>
          </div>
        </td>
      );
    case 'text':
      return (
        <td className={cellClassNames}>
          <div className={cellContentClassNames}>
            {rowHeaderEl}
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </td>
      );
    default:
      return (
        <td className={cellClassNames}></td>
      );
  }
};

export default TableCell;
