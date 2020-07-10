import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Folder = ({ className, fill }) => (
  <svg
    className={className}
    height="18"
    viewBox="0 0 20 18"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      fill={fill}
    >
      <path
        d="M18.107 3.75h-8.74c-.376 0-.626-.25-.626-.62V1.89C8.74.896 7.868.03 6.87.03H1.873C.873.03 0 .896 0 1.89v13.638c0 .992.874 1.86 1.873 1.86h16.234c1 0 1.874-.868 1.874-1.86v-9.92c0-.99-.874-1.86-1.873-1.86zm.625 11.778c0 .372-.25.62-.625.62H1.873c-.374 0-.624-.248-.624-.62V1.888c0-.37.25-.62.623-.62h4.995c.375 0 .625.25.625.62v1.24c0 .993.874 1.86 1.873 1.86h8.74c.376 0 .626.25.626.62v9.92z"
      />
      <path
        d="M12.488 10.196h-1.873v-1.86c0-.372-.25-.62-.625-.62-.374 0-.624.248-.624.62v1.86H7.493c-.375 0-.625.248-.625.62s.25.62.625.62h1.873v1.86c0 .372.25.62.624.62.375 0 .625-.248.625-.62v-1.86h1.873c.374 0 .624-.248.624-.62s-.25-.62-.624-.62z"
      />
    </g>
  </svg>
);

Folder.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

Folder.defaultProps = {
  className: '',
  fill: color.eclipse,
};

export default Folder;
