import classNames from 'classnames/bind';

import styles from "./Grid.module.scss";

const cx = classNames.bind(styles);

export interface GridRowProps {
  className?: string ,
  children: React.ReactNode,
  disableGaps?: "row" | "column" | "all",
  disableWrapping?: boolean,
}

export const GridRow: React.FC<GridRowProps> = ({
  className,
  children,
  disableGaps,
  disableWrapping,
}: GridRowProps) => {
  const classNames = cx({
    'row': true,
    'row--has-no-row-gaps': disableGaps === "row",
    'row--has-no-column-gaps': disableGaps === "column",
    'row--has-no-gaps': disableGaps === "all",
    'row--has-no-wrapping': disableWrapping,
    className,
  });

  return <div className={classNames}>{children}</div>;
};

export default GridRow;