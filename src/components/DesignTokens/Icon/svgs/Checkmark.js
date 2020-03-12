import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const Checkmark = ({ fill }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    viewBox="0 0 12 8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill={fill} d="M11.838.223a.657.657 0 00-.907-.076L3.245 6.492 1.181 4.149a.652.652 0 00-.632-.272.641.641 0 00-.522.442.621.621 0 00.186.65L2.68 7.791l.048.047c.019 0 .036.035.055.047a.325.325 0 00.055.032.689.689 0 00.065.038l.068.022a.5.5 0 00.065.019.614.614 0 00.136 0 .661.661 0 00.11 0h.016l.094-.022h.019l.084-.038.026-.019.065-.044 8.19-6.755a.621.621 0 00.065-.9z" />
  </svg>
);

Checkmark.propTypes = {
  fill: PropTypes.string,
};

Checkmark.defaultProps = {
  fill: color.eclipse,
};

export default Checkmark;
