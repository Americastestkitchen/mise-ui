import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../styles';
import {
  ATKBrandIcon,
  CIOBrandIcon,
  CCOBrandIcon,
  KidsBrandIcon,
  SchoolBrandIcon,
  ShopBrandIcon,
} from './svgs';

const StyledBadge = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
`;

const determineType = (type, fill) => {
  const types = {
    atk: ATKBrandIcon,
    cio: CIOBrandIcon,
    cco: CCOBrandIcon,
    kids: KidsBrandIcon,
    school: SchoolBrandIcon,
    shop: ShopBrandIcon,
  };
  const El = types[type];
  return El && <El fill={fill} />;
};

const determineBadgeText = (type) => {
  const types = {
    atk: 'America’s Test Kitchen',
    cio: 'Cook’s Illustrated',
    cco: 'Cook’s Country',
    kids: 'ATK Kids',
    school: 'Cooking School',
    shop: 'ATK Shop',
  };
  const El = types[type];
  return El;
};

/**
 * Badges exist for brand logos (cc, ci, atk, kids) and also other destination
 * identities like shop.
 * <br>
 * Logo badges appear on cards in mixed brand scenarios, like search and
 * do not appear when only one brand’s content is showing
 *  Badges on a card do not go anywhere, but the badges that
 *  appear in the browse bar *are* interactive and function as facets
 */

const Badge = ({
  className,
  fill,
  type,
}) => (
  <StyledBadge
    data-testid={`${type}-badge`}
    role="img"
    aria-label={determineBadgeText(type)}
    className={`badge${className ? ` ${className}` : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
  >
    {determineType(type, fill)}
  </StyledBadge>
);

Badge.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  type: PropTypes.oneOf(['atk', 'cio', 'cco', 'kids', 'school', 'shop']).isRequired,
};

Badge.defaultProps = {
  className: '',
  fill: `${color.transparentBlack}`,
};

export default Badge;
