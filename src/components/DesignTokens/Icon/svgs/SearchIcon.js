import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const SearchIcon = ({ fill }) => (
  <svg
    className="search-icon"
    role="img"
    aria-label="search"
    viewBox="0 0 30 29.977"
  >
    <defs><clipPath id="search-icon-clipPath"><path d="M1049.75-79.754a7.5 7.5 0 017.5-7.5 7.5 7.5 0 017.5 7.5 7.5 7.5 0 01-7.5 7.5 7.5 7.5 0 01-7.5-7.5m25.595 15.38l-8.906-8.907a11.193 11.193 0 002.053-6.473A11.246 11.246 0 001057.245-91 11.246 11.246 0 001046-79.754a11.246 11.246 0 0011.245 11.246 11.194 11.194 0 006.5-2.071l8.9 8.9a2.016 2.016 0 002.833.136 2.015 2.015 0 00-.136-2.833" transform="translate(-1046 91)" fill={fill} clipRule="evenodd" /></clipPath><clipPath id="b"><path d="M0 521.482h1600V-121H0z" transform="translate(0 121)" fill={fill} /></clipPath></defs><g clipPath="url(#search-icon-clipPath)"><g transform="translate(-1042.003 -25.023)" clipPath="url(#b)"><path d="M1041.003 25.019h30.913v30.92h-30.913z" fill={fill} /></g></g>
  </svg>
);

SearchIcon.propTypes = {
  fill: PropTypes.string,
};

SearchIcon.defaultProps = {
  fill: `${color.eclipse}`,
};

export default SearchIcon;
