import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Videos = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44.322"
    height="34.5"
    aria-hidden="true"
    className="videos"
    focusable="false"
    viewBox="0 0 44.322 34.5"
  >
    <g transform="translate(1 1)" stroke={fill}>
      <circle cx="2.31" cy="2.31" transform="translate(3.379 28.38)" fill={fill} strokeMiterlimit="10" r="2.31" />
      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M.814 30.69h40.578" />
      <path fill="none" strokeLinejoin="round" strokeWidth="2" d="M0 0h42.322v22.108H0z" />
      <path d="M16.998 17.375V5.106L28.17 11.24z" fill="none" strokeLinejoin="round" strokeWidth="2" />
    </g>
  </svg>
);

Videos.propTypes = {
  fill: PropTypes.string,
};

Videos.defaultProps = {
  fill: `${color.eclipse}`,
};

export default Videos;
