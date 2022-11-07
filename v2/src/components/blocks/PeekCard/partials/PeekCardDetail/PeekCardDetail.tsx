import classNames from 'classnames/bind';

import styles from "./PeekCardDetail.module.scss";

const cx = classNames.bind(styles);

export interface PeekCardDetailProps {
  body: string;
  title: string;
}

export const PeekCardDetail: React.FC<PeekCardDetailProps> = ({
  body,
  title
}: PeekCardDetailProps) => (
  <div className={styles.peekCardDetailContainer}>
    <p className={styles.peekCardDetailTitle}>{title}</p>
    <p className={styles.peekCardDetailBody}>{body}</p>
  </div>
);

export default PeekCardDetail;
