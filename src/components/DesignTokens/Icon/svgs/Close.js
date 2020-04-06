import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Close = ({ ariaLabel, fill }) => (
  <svg
    aria-label={ariaLabel}
    className="close"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12.828 12.828"
  >
    <g fill="none" stroke={fill} strokeLinecap="round" strokeWidth="2"><path d="M1.414 1.414l10 10" /><path d="M11.414 1.414l-10 10" /></g>
  </svg>
);

Close.propTypes = {
  ariaLabel: PropTypes.string,
  fill: PropTypes.string,
};

Close.defaultProps = {
  ariaLabel: 'close',
  fill: `${color.eclipse}`,
};

export default Close;
