import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const Close = ({ ariaLabel, fill }) => (
  <svg
    aria-label={ariaLabel}
    xmlns="http://www.w3.org/2000/svg"
    width="12.828"
    height="12.828"
    viewBox="0 0 12.828 12.828"
  >
    <g transform="translate(1.414 1.414)">
      <line
        x2="14.142"
        transform="translate(0 0) rotate(45)"
        fill={fill}
        stroke="#3d3d3d"
        strokeLinecap="round"
        strokeWidth={2}
      />
      <line
        x2="14.142"
        transform="translate(10 0) rotate(135)"
        fill={fill}
        stroke="#3d3d3d"
        strokeLinecap="round"
        strokeWidth={2}
      />
    </g>
  </svg>
);

Close.propTypes = {
  ariaLabel: PropTypes.string,
  fill: PropTypes.string,
};

Close.defaultProps = {
  ariaLabel: "close",
  fill: `${color.eclipse}`,
};

export default Close;
