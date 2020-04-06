import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Lock = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 10"
  >
    <defs>
      <clipPath id="lock-a">
        <path fill={fill} d="M7-5.227H3.993v-1.64a1.41 1.41 0 011.451-1.361h.107A1.41 1.41 0 017-6.868zm1.453 0v-1.641a2.819 2.819 0 00-2.9-2.724h-.109a2.819 2.819 0 00-2.9 2.724v1.641H1.511V.408h8v-5.635z" clipRule="evenodd" transform="translate(-1.511 9.592)" />
      </clipPath>
    </defs>
    <g clipPath="url(#lock-a)">
      <path fill={fill} d="M-6.307-5.913h20.613v21.827H-6.307z" />
    </g>
  </svg>
);

Lock.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

Lock.defaultProps = {
  className: null,
  fill: `${color.eclipse}`,
};

export default Lock;
