import React from 'react';
import PropTypes from 'prop-types';

const Checkmark = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15.683"
    height="12.318"
    viewBox="0 0 15.683 12.318"
  >
    <path
      d="M14832.2-23826.236l4.43,4.84,8.221-9.148"
      transform="translate(-15244.245 23569.494) rotate(1)"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);

Checkmark.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default Checkmark;
