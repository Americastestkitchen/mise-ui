import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const StarEmpty = ({ ariaHidden, color, focusable }) => (
  <svg
    aria-hidden={ariaHidden}
    focusable={focusable}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    className="icon-star-empty"
    viewBox="0 0 16.7 16"
  >
    <path fill="none" stroke={color} strokeWidth=".5" d="M8.4 11.9l-4.7 3.4 1.8-5.5L.8 6.3l5.8.1L8.4.8l1.8 5.6 5.8-.1-4.7 3.5 1.8 5.5-4.7-3.4z" />
  </svg>
);

StarEmpty.propTypes = {
  ariaHidden: PropTypes.bool,
  color: PropTypes.string,
  focusable: PropTypes.bool,
};

StarEmpty.defaultProps = {
  ariaHidden: true,
  color: `${color.eclipse}`,
  focusable: false,
};

export default StarEmpty;
