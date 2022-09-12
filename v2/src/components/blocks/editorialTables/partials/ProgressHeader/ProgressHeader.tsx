import React from 'react';

import CircularButton from '../../../../partials/CircularButton/CircularButton';
import styles from './progressHeader.module.scss';

type ProgressHeaderProps = {
  currentPage: number;
  maxPage: number;
  decrementPage: () => void;
  incrementPage: () => void;
};

// TODO (A11Y): add aria labels for pages and buttons
const ProgressHeader = ({ currentPage, maxPage, decrementPage, incrementPage }: ProgressHeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.pageIndicator}>
        {currentPage + 1} of {maxPage}
      </p>
      <div>
        <CircularButton onClick={decrementPage} iconType="leftArrow" />
        <CircularButton onClick={incrementPage} iconType="rightArrow" />
      </div>
    </div>
  );
};

export default ProgressHeader;
