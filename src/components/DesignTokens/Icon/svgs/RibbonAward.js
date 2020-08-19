import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const RibbonAward = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="ribbon-award"
    focusable="false"
    viewBox="0 0 38.689 54.035"
  >
    <g transform="translate(1 1)" fill="none" stroke={fill} strokeLinejoin="round" strokeWidth="2">
      <circle cx="8.191" cy="8.191" transform="translate(10.026 10.964)" r="8.191" />
      <path d="M29.795 33.655l-.324.984-5.044.025a3.648 3.648 0 00-2.117.687l-3.429 2.48-.532.944 7.477 13.261 2.357-8.508 8.508 2.358z" />
      <path d="M14.121 35.355A3.618 3.618 0 0012 34.669l-5.044-.018-.228-.692L.005 45.883l8.508-2.358 2.357 8.508 7.477-13.261-.351-.623z" />
      <path d="M34.89 18.034l1.544-4.8-4.07-2.979a3.647 3.647 0 01-1.311-1.8l-1.577-4.793-5.044-.018a3.623 3.623 0 01-2.121-.686l-4.1-2.953-4.091 2.953a3.643 3.643 0 01-2.117.686l-5.044.026-1.58 4.792a3.656 3.656 0 01-1.314 1.807l-4.07 2.971 1.544 4.8a3.673 3.673 0 010 2.241l-1.544 4.8 4.07 2.979a3.648 3.648 0 011.311 1.8l1.349 4.1.228.692 5.044.018a3.617 3.617 0 012.121.686l3.875 2.794.351.623.532-.944 3.429-2.48a3.649 3.649 0 012.117-.687l5.044-.025.324-.984 1.256-3.809a3.659 3.659 0 011.314-1.807l4.07-2.971-1.544-4.8a3.649 3.649 0 01.004-2.232z" />
    </g>
  </svg>
);

RibbonAward.propTypes = {
  fill: PropTypes.string,
};

RibbonAward.defaultProps = {
  fill: `${color.eclipse}`,
};

export default RibbonAward;
