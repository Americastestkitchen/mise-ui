import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const BreadcrumbArrow = ({ fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 9" role="img" aria-hidden="true" focusable="false">
    <path fill={fill} fillRule="evenodd" d="M.14 1.762L1.184.718 5.14 4.675 1.184 8.632.14 7.59l2.914-2.915L.14 1.762z" />
  </svg>
);

BreadcrumbArrow.propTypes = {
  fill: PropTypes.string,
};

BreadcrumbArrow.defaultProps = {
  fill: `${color.eclipse}`,
};

export default BreadcrumbArrow;
