import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const ChevronThinDown = ({
  ariaHidden,
  ariaLabel,
  className,
  fill,
}) => (
  <svg
    aria-hidden={ariaHidden}
    aria-label={ariaLabel}
    className={className}
    focusable="false"
    role="img"
    viewBox="0 0 264.7 150.8"
    width="15"
    height="8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="chevron-shape"
      d="M0,18.3,132.3,150.8,264.7,18.2,247.3,0,133,115.3,17.5.5Z"
      fill={fill}
    />
  </svg>
);

ChevronThinDown.propTypes = {
  ariaHidden: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};

ChevronThinDown.defaultProps = {
  ariaHidden: 'true',
  ariaLabel: 'menu',
  className: '',
  fill: color.eclipse,
};

export default ChevronThinDown;
