import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Filter = ({ ariaLabel, fill }) => {
  return (
    <svg
      aria-label={ariaLabel}
      className="close"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
    >
      <rect x="0" y="0" width="17" height="2" fill={fill} />
    </svg>
  );
};

Filter.propTypes = {
  ariaLabel: PropTypes.string,
  fill: PropTypes.string,
};

Filter.defaultProps = {
  ariaLabel: 'close',
  fill: `${color.eclipse}`,
};

export default Filter;
