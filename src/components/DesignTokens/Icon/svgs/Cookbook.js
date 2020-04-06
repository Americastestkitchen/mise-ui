import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Cookbook = ({ className }) => (
  <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
    <defs>
      <clipPath id="cookbook-icon-a">
        <path fill={`${color.eclipse}`} d="M15.652-13.7h-.7V-15a.341.341 0 00-.226-.355 6.511 6.511 0 00-2.252-.392 6.37 6.37 0 00-4.44 1.727A6.37 6.37 0 003.6-15.75a6.533 6.533 0 00-2.258.392.345.345 0 00-.224.339v1.32h-.77a.345.345 0 00-.348.343v9.265a.345.345 0 00.348.341h15.3A.345.345 0 0016-4.092v-9.265a.345.345 0 00-.348-.341zm-7.266.3a5.632 5.632 0 014.09-1.67 5.885 5.885 0 011.78.273v8.527a6.625 6.625 0 00-1.87-.263 6.3 6.3 0 00-4 1.5zm-6.57-1.4a5.885 5.885 0 011.784-.265A5.63 5.63 0 017.684-13.4v8.36a6.3 6.3 0 00-4-1.5 6.611 6.611 0 00-1.868.267zM.7-13h.42v7.22a.345.345 0 00.282.336.36.36 0 00.2-.026 5.836 5.836 0 012.072-.38 5.605 5.605 0 013.64 1.415H.7zm14.6 8.575H8.746a5.609 5.609 0 013.64-1.415 5.814 5.814 0 012.064.373.348.348 0 00.228.027.341.341 0 00.276-.334V-13h.346z" />
      </clipPath>
      <clipPath id="cookbook-icon-b">
        <path fill={`${color.eclipse}`} d="M0-3.443h16V-16H0z" transform="translate(0 16)" />
      </clipPath>
    </defs>
    <g clipPath="url(#cookbook-icon-a)" transform="translate(0 15.75)">
      <g clipPath="url(#cookbook-icon-b)" transform="translate(0 -15.946)">
        <path fill={`${color.eclipse}`} d="M-4-3.728h24v19.85H-4z" />
      </g>
    </g>
  </svg>
);

Cookbook.propTypes = {
  className: PropTypes.string,
};

Cookbook.defaultProps = {
  className: null,
};

export default Cookbook;
