import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Plus = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="14.5" width="16" height="1.5"></rect>
    <rect x="14.5" y="7" width="1.5" height="16"></rect>
  </svg>
);

Plus.propTypes = {
  fill: PropTypes.string,
};

Plus.defaultProps = {
  fill: `${color.eclipse}`,
};

export default Plus;
