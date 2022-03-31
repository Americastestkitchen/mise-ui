import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const LatestReviews = ({ fill }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="27.238"
    width="38.13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="a">
        <path data-name="Rectangle 7403" d="M0 0h38.13v27.238H0z" fill={fill} />
      </clipPath>
    </defs>
    <g data-name="Latest Issue - White">
      <g data-name="Group 65500" clipPath="url(#a)" fill={fill}>
        <path data-name="Path 42222" d="M19.073 27.237a.857.857 0 0 1-.858-.858V2.75a.86.86 0 0 1 .252-.607L20.356.251a.858.858 0 0 1 .61-.251h16.306a.858.858 0 0 1 .858.858v23.636a.858.858 0 0 1-.858.858H21.32l-1.641 1.636a.858.858 0 0 1-.606.25m.858-24.132v21.208l.43-.428a.856.856 0 0 1 .605-.25h15.448V1.715H21.321z" />
        <path data-name="Path 42223" d="M19.057 27.238a.858.858 0 0 1-.606-.25l-1.641-1.636H.858A.858.858 0 0 1 0 24.494V.858A.858.858 0 0 1 .858 0h16.306a.857.857 0 0 1 .607.252l1.892 1.892a.857.857 0 0 1 .251.606v23.63a.857.857 0 0 1-.857.858m-17.342-3.6h15.449a.858.858 0 0 1 .605.25l.429.429V3.105l-1.39-1.39H1.715z" />
        <path data-name="Path 42224" d="M14.942 13.544h-10a.86.86 0 1 1 0-1.72h10a.86.86 0 0 1 0 1.72" />
        <path data-name="Path 42225" d="M14.942 19.708h-10a.858.858 0 0 1 0-1.715h10a.858.858 0 0 1 0 1.715" />
        <path data-name="Path 42226" d="M14.942 7.369h-10a.86.86 0 0 1 0-1.72h10a.86.86 0 0 1 0 1.72" />
        <path data-name="Path 42227" d="M33.458 19.708h-10a.858.858 0 1 1 0-1.715h10a.858.858 0 0 1 0 1.715" />
        <path data-name="Path 42228" d="M33.459 14.58H23.442a.858.858 0 0 1-.858-.858V6.507a.858.858 0 0 1 .858-.858h10.017a.858.858 0 0 1 .858.858v7.215a.858.858 0 0 1-.858.858m-9.16-1.711h8.3v-5.5h-8.3z" />
      </g>
    </g>
  </svg>
);

LatestReviews.propTypes = {
  fill: PropTypes.string,
};

LatestReviews.defaultProps = {
  fill: color.white,
};

export default LatestReviews;
