import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const Rewind = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.604 22.685"
    role="img"
    aria-label="Rewind video by 15 seconds"
  >
    <g>
      <path d="M10.951 5.358v2.55L4.032 3.954 10.951 0v3.149" fill={fill} />
      <path d="M1.588 7.79l1.666 1.215a7.61 7.61 0 107.7-3.648V3.148A9.8 9.8 0 110 12.883 7.545 7.545 0 011.588 7.79z" fill={fill} />
      <g>
        <path d="M8.415 15.42v-4.669h-.868l-1.47 1.477.567.6.777-.791v3.383zm2.6.084a1.647 1.647 0 001.873-1.617 1.459 1.459 0 00-1.5-1.512 1.481 1.481 0 00-1.029.392v-1.141h2.214v-.875H9.367v2.669l.693.189a1.34 1.34 0 01.98-.378c.532 0 .84.28.84.693 0 .378-.315.693-.868.693a1.683 1.683 0 01-1.239-.511l-.553.698a2.329 2.329 0 001.799.7z" fill={fill} />
      </g>
    </g>
  </svg>
);

Rewind.propTypes = {
  fill: PropTypes.string,
};

Rewind.defaultProps = {
  fill: color.eclipse,
};

export default Rewind;
