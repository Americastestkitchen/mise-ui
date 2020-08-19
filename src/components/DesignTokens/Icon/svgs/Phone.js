import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Phone = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="phone"
    focusable="false"
    viewBox="0 0 27.616 45.82"
  >
    <g transform="translate(1 1)" stroke={fill}>
      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.51 5.614h-3.403" />
      <path fill="none" strokeLinejoin="round" strokeWidth="2" d="M0 0h25.616v43.82H0z" />
      <circle cx="1.607" cy="1.607" transform="translate(11.201 35.466)" fill={fill} strokeMiterlimit="10" r="1.607" />
    </g>
  </svg>
);

Phone.propTypes = {
  fill: PropTypes.string,
};

Phone.defaultProps = {
  fill: `${color.eclipse}`,
};

export default Phone;
