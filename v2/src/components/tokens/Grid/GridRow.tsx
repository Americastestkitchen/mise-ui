import React from "react";
import classNames from 'classnames/bind';

import styles from "./Grid.module.scss";

const cx = classNames.bind(styles);

export interface ContentContainerProps {
  className?: string ,
  children: JSX.Element | JSX.Element[],
  disableGaps?: "row" | "column" | "all",
  disableWrapping?: boolean,
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  className,
  children,
  disableGaps,
  disableWrapping,
}: ContentContainerProps) => {
  const classNames = cx({
    'row': true,
    'row--has-no-row-gaps': disableGaps === "row",
    'row--has-no-column-gaps': disableGaps === "column",
    'row--has-no-gaps': disableGaps === "all",
    'row--has-no-wrapping': disableWrapping,
  });

  return <div className={`${classNames} ${className}`}>{children}</div>;
};

export default ContentContainer;