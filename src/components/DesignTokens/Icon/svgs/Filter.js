import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Filter = ({ className, fill }) => (
  <svg
    aria-hidden="true"
    className={className}
    data-testid="filter-icon"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 12"
  >
    <g transform="translate(18386.5 -3574.5)">
      <line x2="17" transform="translate(-18386.5 3577.5)" stroke={fill} strokeWidth="2" />
      <line x2="17" transform="translate(-18386.5 3583.5)" stroke={fill} strokeWidth="2" />
      <line y2="6" transform="translate(-18381.5 3574.5)" stroke={fill} strokeWidth="2" />
      <line y2="6" transform="translate(-18374.5 3580.5)" stroke={fill} strokeWidth="2" />
    </g>
  </svg>
);

Filter.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

Filter.defaultProps = {
  className: '',
  fill: `${color.eclipse}`,
};

export default Filter;
