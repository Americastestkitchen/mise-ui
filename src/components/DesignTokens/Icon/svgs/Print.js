import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Print = ({ ariaHidden, ariaLabel, className, fill }) => (
  <svg
    aria-hidden={ariaHidden}
    aria-label={ariaLabel}
    className={className}
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd">
      <path fill={fill} d="M13.758 16.388c0 .292-.093.441-.437.441H4.613c-.292 0-.441-.092-.441-.441v-4.061h9.586v4.06zM4.212 1.298c.017-.269.064-.391.401-.395h8.708c.347-.02.403.066.397.395v4.06H4.212v-4.06zm11.43 4.06h-1.163v-4.06c0-.641-.521-1.163-1.158-1.163H4.613c-.641 0-1.162.522-1.162 1.163v4.06H2.288c-.986 0-1.74.755-1.74 1.744v5.225c0 .985.754 1.74 1.74 1.74H3.45v2.32c0 .641.521 1.163 1.162 1.163h8.708c.637 0 1.158-.522 1.158-1.162v-2.321h1.163a1.71 1.71 0 0 0 1.74-1.74V7.102c0-.989-.754-1.743-1.74-1.743z" />
      <path fill="#3f2b1e" d="M14.48 8.261a.58.58 0 1 1-1.16.003.58.58 0 0 1 1.16-.003" />
      <path fill={fill} d="M4.613 14.067h8.708v-.582H4.613zM4.613 15.81h8.708v-.582H4.613z" />
    </g>
  </svg>
);

Print.propTypes = {
  ariaHidden: PropTypes.bool,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
};

Print.defaultProps = {
  ariaHidden: true,
  ariaLabel: '',
  className: '',
  fill: color.eclipse,
};

export default Print;
