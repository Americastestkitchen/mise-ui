import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const CloseV2 = ({ ariaLabel, fill }) => (
  <svg
    aria-label={ariaLabel}
    xmlns="http://www.w3.org/2000/svg"
    width="12.828"
    height="12.828"
    viewBox="0 0 12.828 12.828"
  >
    <g>
      <path
        transform="rotate(45 -1 2.414)"
        stroke={fill}
        style={{
          'stroke-linecap': 'round',
          'stroke-width': '2px',
        }}
        d="M0 0h14.142"
      />
      <path
        transform="rotate(135 5.414 3.07)"
        stroke={fill}
        style={{
          'stroke-linecap': 'round',
          'stroke-width': '2px',
        }}
        d="M0 0h14.142"
      />
    </g>
  </svg>
);

CloseV2.propTypes = {
  ariaLabel: PropTypes.string,
  fill: PropTypes.string,
};

CloseV2.defaultProps = {
  ariaLabel: 'close',
  fill: `${color.eclipse}`,
};

export default CloseV2;
