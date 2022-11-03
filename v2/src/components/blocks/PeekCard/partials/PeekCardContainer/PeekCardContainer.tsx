import classNames from 'classnames/bind';

import styles from "./PeekCardContainer.module.scss";

const cx = classNames.bind(styles);

export interface PeekCardContainerProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export const PeekCardContainer: React.FC<PeekCardContainerProps> = ({ className }: PeekCardContainerProps) => {
  const classNames = cx({
    'component': true,
    $className: !!className,
  });
  return <div className={`${classNames}`}>PeekCardContainer</div>
};

export default PeekCardContainer;