import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Cookbook = ({ className, fill }) => (
  <svg
    aria-hidden="true"
    className={`${className} cookbook-svg`}
    data-testid="cookbook-svg"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 16 12"
  >
    <path fill={fill} d="M15.7 2H15V.7c0-.2-.1-.3-.2-.4-.8-.2-1.6-.3-2.3-.3C10.8 0 9.2.6 8 1.7 6.8.6 5.2 0 3.6 0c-.8 0-1.5.1-2.3.4-.1 0-.2.2-.2.3V2H.3c-.1 0-.3.2-.3.4v9.3c0 .1.2.3.3.3h15.3c.2 0 .3-.1.4-.3V2.4c0-.2-.2-.4-.3-.4zm-15 9.3V2.7h.4V10c0 .2.1.3.3.3h.2c.7-.3 1.4-.4 2.1-.4 1.3 0 2.6.5 3.6 1.4H.7zm7-.6c-1.1-1-2.5-1.5-4-1.5-.6 0-1.3.1-1.9.3V.9C2.4.8 3 .7 3.6.7c1.5 0 3 .6 4.1 1.7v8.3zm.7-8.4C9.5 1.2 11 .6 12.5.6c.6 0 1.2.1 1.8.3v8.5c-.6-.2-1.2-.3-1.9-.3-1.5 0-2.9.5-4 1.5V2.3zm6.9 9H8.7c1-.9 2.3-1.4 3.6-1.4.7 0 1.4.1 2.1.4h.2c.2 0 .3-.2.3-.3V2.7h.3v8.6z" />
  </svg>
);

Cookbook.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

Cookbook.defaultProps = {
  className: null,
  fill: color.eclipse,
};

export default Cookbook;
