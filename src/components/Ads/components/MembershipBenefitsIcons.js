import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Cookbook, Phone, RecipeCard, RibbonAward, Videos } from '../../DesignTokens/Icon/svgs';
import { color, font } from '../../../styles';

const benefits = [
  {
    icon: 'card',
    desc: '12,000 + recipes',
  },
  {
    icon: 'ratings',
    desc: '8,000 + ratings',
  },
  {
    icon: 'watch',
    desc: 'video and tips',
  },
  {
    icon: 'cookbook',
    desc: 'cookbook collection',
  },
  {
    icon: 'mobile',
    desc: 'mobile app',
  },
];

const MembershipBenefitsIconsWrapper = styled.div.attrs({
  className: 'membership-benefits-icons',
})`
  display: flex;
  justify-content: space-between;
`;

const icons = {
  card: RecipeCard,
  cookbook: Cookbook,
  watch: Videos,
  ratings: RibbonAward,
  mobile: Phone,
};

const renderIcon = (icon) => {
  const Icon = icon ? icons[icon] : null;
  return <Icon fill={color.white} />;
};

const Benefit = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 6rem;

  p {
    color: ${color.white};
    font: 1.2rem/1.17 ${font.pnb};
    line-height: 1.2;
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

const CircularIcon = styled.div`
  ${({ animated }) => (animated ? 'animation: pulse 6s infinite ease-in-out;' : '')}
  background-color: ${color.black};
  border-radius: 50%;
  display: inline-block;
  height: 6rem;
  position: relative;
  width: 6rem;

  @keyframes pulse {
    5% {
      background-color: ${color.darkerMint};
    }
    10% {
      background-color: ${color.darkerMint};
    }
    15% {
      background-color: ${color.black};
    }
  }

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 3rem;

    &.phone {
      width: 2rem;
    }

    &.ribbon-award {
      width: 2.5rem;
    }
  }
`;

const MembershipBenefitsIcons = ({ animated }) => (
  <MembershipBenefitsIconsWrapper
    data-testid="benefit-icons"
  >
    {
      benefits.map((benefit, idx) => (
        <Benefit
          className="membership-benefit"
          data-testid={`membership-benefit-${idx}`}
          key={benefit.icon}
        >
          <CircularIcon
            animated={animated}
            style={{ animationDelay: `${idx}s` }}
          >
            {renderIcon(benefit.icon)}
          </CircularIcon>
          <p>
            {benefit.desc}
          </p>
        </Benefit>
      ))
    }
  </MembershipBenefitsIconsWrapper>
);

MembershipBenefitsIcons.propTypes = {
  animated: PropTypes.bool,
};

MembershipBenefitsIcons.defaultProps = {
  animated: true,
};

export default MembershipBenefitsIcons;
