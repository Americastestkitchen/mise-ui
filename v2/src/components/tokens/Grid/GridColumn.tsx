import React from "react";
import classNames from 'classnames/bind';

import styles from "./Grid.module.scss";

const cx = classNames.bind(styles);

export interface ContentContainerProps {
  className?: string ,
  children: JSX.Element | JSX.Element[],
  width: "full" | "threeQuarters" | "twoThirds" | "half" | "oneThird" | "oneQuarter"
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  className,
  children,
  width = "full",
}: ContentContainerProps) => {
  let convertedWidth = "1";

  switch (width) {
    case "full":
      convertedWidth = "1";
      break;
    case "threeQuarters":
      convertedWidth = "3-4";
      break;
    case "twoThirds":
      convertedWidth = "2-3";
      break;
    case "half":
      convertedWidth = "1-2";
      break;
    case "oneThird":
      convertedWidth = "1-3";
      break;
    case "oneQuarter":
      convertedWidth = "1-4";
      break;
    default:
      convertedWidth = "1";
      break;
  }

  const classNames = cx(
    'column',
    `column--is-${convertedWidth}`,
  );

  return <div className={`${classNames} ${className}`}>{children}</div>;
};

export default ContentContainer;