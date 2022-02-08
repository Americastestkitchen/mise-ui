import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Comment = ({ ariaHidden, ariaLabel, fill, focusable, style }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-label={ariaLabel}
    focusable={focusable}
    style={style}
    height="13.284"
    viewBox="0 0 13.279 13.284"
    xmlns="http://www.w3.org/2000/svg"
    width="13.279"
  >
    <g transform="translate(-13.993 -7.02)">
      <path
        d="M27.26,13.252A6.64,6.64,0,1,0,20.452,20.3a6.394,6.394,0,0,0,3.081-.664,1.69,1.69,0,0,1,1.125-.092l2.14.609a.27.27,0,0,0,.332-.332l-.646-1.993a1.594,1.594,0,0,1,.092-1.2A6.653,6.653,0,0,0,27.26,13.252Z"
        fill={fill}
      />
    </g>
  </svg>
);

Comment.propTypes = {
  ariaHidden: PropTypes.bool,
  ariaLabel: PropTypes.string,
  fill: PropTypes.string,
  focusable: PropTypes.bool,
  style: PropTypes.object,
};

Comment.defaultProps = {
  ariaHidden: true,
  ariaLabel: null,
  fill: `${color.mint}`,
  focusable: false,
  style: null,
};

export default Comment;
