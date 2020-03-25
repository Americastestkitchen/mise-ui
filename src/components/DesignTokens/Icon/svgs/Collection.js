import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const Collection = ({ fill }) => {
  return (
    <svg
      viewBox="0 0 9.564 9.564"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="collection"
    >
      <path fill={fill} d="M5 5.99v-.1A.89.89 0 015.89 5h4.765a.89.89 0 01.89.891v4.765a.89.89 0 01-.89.89h-.1V7.412A1.424 1.424 0 009.134 5.99z" transform="translate(-1.98 -5)" />
      <path fill={fill} d="M23.4 20.274h-4.12v-.1a.887.887 0 01.886-.886h4.748a.887.887 0 01.887.886v4.748a.887.887 0 01-.887.886h-.1v-4.117a1.419 1.419 0 00-1.414-1.417z" transform="translate(-17.759 -17.767)" />
      <rect fill={fill} width="6.545" height="6.545" rx="1" transform="translate(0 3.02)" />
    </svg>
  );
}

Collection.propType = {
  fill: PropTypes.string,
}

Collection.defaultProps = {
  fill: `${color.eclipse}`,
}

export default Collection;
