import React from 'react';
import PropTypes from 'prop-types';

const FavoriteRibbonWithBg = ({ ariaLabel, className }) => (
  <svg
    aria-label={ariaLabel}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={29}
    height="35.911"
    viewBox="0 0 29 35.911"
  >
    <defs>
      <filter
        id="SAVE"
        x={0}
        y={0}
        width={29}
        height="35.911"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={1} input="SourceAlpha" />
        <feGaussianBlur stdDeviation={2} result="blur" />
        <feFlood floodOpacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g
      id="Save_White"
      data-name="Save White"
      transform="translate(3.5 2.5)"
    >
      <path
        id="Path_36565"
        data-name="Path 36565"
        d="M0-.658H22V30.653l-10.876-7.37L0,30.653Z"
        transform="translate(0 0.658)"
        color="#3d3d3d"
        fill="rgba(0,0,0,0.7)"
      />
      <g className="is-favorited" transform="matrix(1, 0, 0, 1, -3.5, -2.5)">
        <path
          id="SAVE-2"
          data-name="SAVE"
          d="M7.483,15.809,0,21V0H15V21Z"
          transform="translate(7 6)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <use xlinkHref="#SAVE" />
      </g>
      <g className="favorite-hover" id="Group_1368" data-name="Group 1368" transform="translate(-147 397)">
        <line
          id="Line_19"
          data-name="Line 19"
          x2={10}
          transform="translate(153 -385.5)"
          fill="none"
          stroke="#3d3d3d"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <line
          id="Line_20"
          data-name="Line 20"
          x2={10}
          transform="translate(158 -390.5) rotate(90)"
          fill="none"
          stroke="#3d3d3d"
          strokeLinecap="round"
          strokeWidth={2}
          className="only-minus"
        />
      </g>
    </g>
  </svg>
);

FavoriteRibbonWithBg.propTypes = {
  /** Labels the element for screen readers in cases where a text label is not included */
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
};

FavoriteRibbonWithBg.defaultProps = {
  className: null,
};

export default FavoriteRibbonWithBg;
