import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const Pause = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 35 35"
    role="img"
    aria-label="pause video"
  >
    <g>
      <path d="M17.501 35a17.5 17.5 0 1112.374-5.126A17.386 17.386 0 0117.501 35zm3-25a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 103 0v-12a1.5 1.5 0 00-1.5-1.5zm-6 0a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 103 0v-12a1.5 1.5 0 00-1.5-1.5z" fill={fill} />
    </g>
  </svg>
);

Pause.propTypes = {
  fill: PropTypes.string,
};

Pause.defaultProps = {
  fill: color.eclipse,
};

export default Pause;
