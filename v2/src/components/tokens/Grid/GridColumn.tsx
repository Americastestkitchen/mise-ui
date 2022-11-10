import classNames from 'classnames/bind';

import styles from "./Grid.module.scss";

const cx = classNames.bind(styles);

export interface GridColumnProps {
  className?: string ,
  children: React.ReactNode;
  width: "full" | "threeFourths" | "fiveEighths" | "half" | "threeEighths" | "oneFourth"
}

export const GridColumn: React.FC<GridColumnProps> = ({
  className,
  children,
  width = "full",
}) => {
  let convertedWidth = "1";

  switch (width) {
    case "full":
      convertedWidth = "1";
      break;
    case "threeFourths":
      convertedWidth = "3-4";
      break;
    case "fiveEighths":
      convertedWidth = "5-8";
      break;
    case "half":
      convertedWidth = "1-2";
      break;
    case "threeEighths":
      convertedWidth = "3-8";
      break;
    case "oneFourth":
      convertedWidth = "1-4";
      break;
    default:
      convertedWidth = "1";
      break;
  }

  const classNames = cx(
    'column',
    `column--is-${convertedWidth}`
  );

  return <div className={`${classNames} ${className}`}>{children}</div>;
};

export default GridColumn;