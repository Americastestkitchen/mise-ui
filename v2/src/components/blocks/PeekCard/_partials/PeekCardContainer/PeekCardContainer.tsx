import classNames from 'classnames/bind';

import styles from "./PeekCardContainer.module.scss";
export interface PeekCardContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const PeekCardContainer: React.FC<PeekCardContainerProps> = ({
  children,
}: PeekCardContainerProps) => {
  return <div className={styles.peekCardContainer}>{children}</div>
};

export default PeekCardContainer;
