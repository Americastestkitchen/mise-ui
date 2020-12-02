import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const FavoriteRibbon = ({
  ariaHidden,
  ariaLabel,
  className,
  fill,
}) => (
  <svg
    aria-hidden={ariaHidden}
    aria-label={ariaLabel}
    className={className}
    data-testid="favorite-ribbon-icon"
    focusable="false"
    height="24"
    role="img"
    viewBox="0 0 17 24"
    width="17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path className="outer-stroke" d="M8.483 16.809L1 22V1h15v21z" fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="2" />
      <path className={`${className}__ribbon`} d="M0 0v23.91L8.48 18 17 23.91V0zm13.5 10h-4v4a1 1 0 01-2 0v-4h-4a1 1 0 010-2h4V4a1 1 0 012 0v4h4a1 1 0 010 2z" fill={fill} />
      <g strokeWidth="3">
        <path className={`${className}__horizontal-line`} strokeLinecap="round" d="M3.5 9h10" />
        <path className={`${className}__vertical-line`} strokeLinecap="flat" d="M8.5 2v6" />
        <path className={`${className}__vertical-line`} strokeLinecap="flat" d="M8.5 10v6" />
      </g>
    </g>
  </svg>
);

FavoriteRibbon.propTypes = {
  /** Labels the element for screen readers in cases where a text label is not included */
  ariaHidden: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string,
};

FavoriteRibbon.defaultProps = {
  className: null,
  fill: `${color.eclipse}`,
};

export default FavoriteRibbon;
