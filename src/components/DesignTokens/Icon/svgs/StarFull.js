import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const StarFull = ({ ariaHidden, ariaLabel, color, focusable }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-label={ariaLabel}
    focusable={focusable}
    xmlns="http://www.w3.org/2000/svg"
    className="icon-star-full"
    role="img"
    viewBox="0 0 15.2 14.5"
  >
    <path fill={color} d="M7.6 11l-4.7 3.5 1.8-5.6L0 5.5h5.8L7.6 0l1.8 5.5h5.8l-4.7 3.4 1.8 5.6L7.6 11z" />
  </svg>
);

StarFull.propTypes = {
  ariaHidden: PropTypes.bool,
  ariaLabel: PropTypes.string,
  color: PropTypes.string,
  focusable: PropTypes.bool,
};

StarFull.defaultProps = {
  ariaHidden: true,
  ariaLabel: null,
  color: `${color.eclipse}`,
  focusable: false,
};

export default StarFull;
