import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const ShoppingCart = ({ fill }) => (
  <svg
    aria-hidden="true"
    className="shopping-cart-icon"
    fill={fill}
    focusable="false"
    viewBox="0 0 35.164 28.826"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-.6 -.3)">
      <g transform="translate(.6 .3)">
        <path
          d="M30.15 20.752l-18.5-.15a.722.722 0 01-.677-.526L5.111 1.879.6 1.8V.3l5.113.075A.722.722 0 016.39.9l5.865 18.2s19.457-1.75 19.008.085-.571 1.497-1.113 1.567z"
          transform="translate(-.6 -.3)"
        />
        <path
          d="M21.964 44.4a3.1 3.1 0 113.064-3.064 3.071 3.071 0 01-3.064 3.064z"
          transform="translate(-6.892 -15.703)"
        />
        <path
          d="M37.264 44.6a3.1 3.1 0 010-6.2 3.02 3.02 0 012.2.933 2.961 2.961 0 01.866 2.2 3.1 3.1 0 01-3.066 3.067zm0-4.863z"
          transform="translate(-11.496 -15.769)"
        />
        <path
          d="M33.036 21.715l-19.026-.343L9.2 6l27.971.226a.928.928 0 01.6.3.731.731 0 01.075.677z"
          transform="translate(-2.734 -1.714)"
        />
      </g>
    </g>
  </svg>
);

ShoppingCart.propTypes = {
  fill: PropTypes.string,
};

ShoppingCart.defaultProps = {
  fill: `${color.eclipse}`,
};

export default ShoppingCart;
