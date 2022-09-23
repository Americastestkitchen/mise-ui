import React from 'react';
import cx from 'classnames';

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
  const wrapperClassNames = cx(
    'progress-header',
    styles.wrapper,
    { [styles.hideDesktop]: maxPage <= 3 },
  );

  const pageIndicatorClassNames = cx(
    'progress-header__page-indicator',
    styles.pageIndicator,
  );

  return (
    <div className={wrapperClassNames}>
      <p className={pageIndicatorClassNames}>
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
