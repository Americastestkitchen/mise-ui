import PropTypes from 'prop-types';
import React from 'react';

const ATKBrandIcon = ({ fill }) => (
  <>
    <circle fill={fill} cx="12.5" cy="12.5" r="12.5" />
    <path fill="#fff" d="M6.035 16l.41-1.6h2.06l.4 1.6h1.59l-1.96-7.22h-1.99l-2 7.22zm2.15-2.71h-1.44l.69-3.12h.02zm1.85-4.51v1.2h1.68V16h1.51V9.98h1.68v-1.2zm7.01 3.09h-.02V8.78h-1.51V16h1.51v-3.7h.02l1.73 3.7h1.7l-2.02-3.98 2.02-3.24h-1.66z" />
  </>
);

ATKBrandIcon.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default ATKBrandIcon;
