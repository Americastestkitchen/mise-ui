import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const FavoriteRibbon = ({
  ariaHidden,
  ariaLabel,
  className,
  fill,
}) => {
  return (
    <svg
      viewBox="0 0 17 24"
      width="17"
      height="24"
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="2">
        <path className={`${className}__ribbon`} d="M8.483 16.809L1 22V1h15v21z" fill={fill} stroke={fill} strokeMiterlimit="10"/>
        <path className={`${className}__vertical-line`} stroke="transparent" strokeLinecap="round" d="M8.5 4v10"/>
        <path className={`${className}__horizontal-line`} stroke="transparent" strokeLinecap="round" d="M3.5 9h10"/>
      </g>
    </svg>
  )
}

FavoriteRibbon.propType = {
  className: PropTypes.string,
  /** Labels the element for screen readers in cases where a text label is not included */
  ariaLabel: PropTypes.string.isRequired,
  ariaHidden: PropTypes.string.isRequired,
  fill: PropTypes.string,
}

FavoriteRibbon.defaultProps = {
  fill: `${color.eclipse}`,
}

export default FavoriteRibbon;
