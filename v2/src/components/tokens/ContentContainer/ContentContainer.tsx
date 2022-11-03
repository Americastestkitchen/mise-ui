import React, { JSXElementConstructor } from "react";
import classNames from 'classnames/bind';

import styles from "./ContentContainer.module.scss";

const cx = classNames.bind(styles);

export interface ContentContainerProps {
  className?: string ,
  children: JSX.Element | JSX.Element[],
  disableGutters?: boolean,
  disableMaxWidth?: boolean,
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  className,
  children,
  disableGutters,
  disableMaxWidth,
}: ContentContainerProps) => {
  const classNames = cx({
    'container': true,
    'container--has-no-max-width': disableGutters,
    'container--has-no-gutters': disableMaxWidth,
  });

  return <div className={`${classNames} ${className}`}>{children}</div>;
};

export default ContentContainer;