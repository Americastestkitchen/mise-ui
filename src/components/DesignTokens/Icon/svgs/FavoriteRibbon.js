import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFavoriteRibbon = styled.svg`
  cursor: pointer;
  width: 1.7rem;
`;

const FavoriteRibbon = ({
  ariaHidden,
  ariaLabel,
  className,
}) => {
  return (
    <StyledFavoriteRibbon
      viewBox="0 0 17 24"
      className={className}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="2">
        <path className={`${className}__ribbon`} d="M8.483 16.809L1 22V1h15v21z" fill="#3d3d3d" stroke="#3d3d3d" strokeMiterlimit="10"/>
        <path className={`${className}__vertical-line`} stroke="#fff" strokeLinecap="round" d="M8.5 4v10"/>
        <path className={`${className}__horizontal-line`} stroke="#fff" strokeLinecap="round" d="M3.5 9h10"/>
      </g>
    </StyledFavoriteRibbon>
  )
}

FavoriteRibbon.propType = {
  className: PropTypes.string,
  /** Labels the element for screen readers in cases where a text label is not included */
  ariaLabel: PropTypes.string.isRequired,
  ariaHidden: PropTypes.string.isRequired,
}

export default FavoriteRibbon;
