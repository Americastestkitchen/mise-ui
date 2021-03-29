import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Star = ({ fill }) => (
  <svg
    aria-hidden="true"
    className="star-icon"
    focusable="false"
    viewBox="0 0 32.736 31.092"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={fill}
      d="M11.901 10.914L16.488 0l4.443 10.914 11.8.89-9.2 7.649 2.992 11.639-10.037-6.533-10.228 6.533 3.1-11.639-9.361-7.649z"
    />
  </svg>
);

Star.propTypes = {
  fill: PropTypes.string,
};

Star.defaultProps = {
  fill: `${color.eclipse}`,
};

export default Star;
