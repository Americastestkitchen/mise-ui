import React from 'react';
import PropTypes from 'prop-types';

import { color } from '../../../../styles';

const sizeLookup = {
  default: {
    horizontal: {
      height: 16,
      width: 1.5,
      x: 14.5,
      y: 7,
    },
    vertical: {
      height: 1.5,
      width: 16,
      x: 7,
      y: 14.5,
    },
  },
  large: {
    horizontal: {
      height: 16,
      width: 3,
      x: 14.5,
      y: 7,
    },
    vertical: {
      height: 3,
      width: 16,
      x: 8,
      y: 13.5,
    },
  },
  extraLarge: {
    horizontal: {
      height: '100%',
      x: 12.5,
      y: 0,
      rx: 3,
      width: 6,
    },
    vertical: {
      height: 6,
      x: 0,
      y: 12.5,
      width: '100%',
    },
  },
};

const Plus = ({ fill, size }) => (
  <svg
    data-size={size}
    data-testid="plus-svg"
    fill={fill}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className="plus-vertical-bar"
      x={sizeLookup[size].vertical.x}
      y={sizeLookup[size].vertical.y}
      width={sizeLookup[size].vertical.width}
      height={sizeLookup[size].vertical.height}
    />
    <rect
      className="plus-horizontal-bar"
      x={sizeLookup[size].horizontal.x}
      y={sizeLookup[size].horizontal.y}
      width={sizeLookup[size].horizontal.width}
      height={sizeLookup[size].horizontal.height}
    />
  </svg>
);

Plus.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large', 'extraLarge']),
};

Plus.defaultProps = {
  fill: color.eclipse,
  size: 'default',
};

export default Plus;
