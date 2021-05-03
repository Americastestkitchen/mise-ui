import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Quote = ({ circleFill, quoteColor }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill={circleFill} />
    <path fill={quoteColor} d="M13.56 8.92c-3.32 1.6-5.88 4.92-5.88 8a3.054 3.054 0 003.12 3.24 3.6 3.6 0 003.56-3.44 2.426 2.426 0 00-2.48-2.6 1.361 1.361 0 00-.4.04 8.3 8.3 0 013.92-3.36zm8.12 0c-3.32 1.6-5.84 4.92-5.84 8a3 3 0 003.08 3.24 3.6 3.6 0 003.56-3.44 2.426 2.426 0 00-2.48-2.6 1.233 1.233 0 00-.4.04 8.3 8.3 0 013.92-3.36z" />
  </svg>
);

Quote.propTypes = {
  circleFill: PropTypes.string,
  quoteColor: PropTypes.string,
};

Quote.defaultProps = {
  circleFill: `${color.mint}`,
  quoteColor: `${color.white}`,
};

export default Quote;
