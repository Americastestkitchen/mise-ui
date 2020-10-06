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
  background-color: ${color.black};
  border-radius: 50%;
  display: inline-block;
  height: 6rem;
  position: relative;
  width: 6rem;

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

  &:hover {
    background-color: ${color.seaSalt};
    cursor: pointer;

    svg {
      &.cookbook-svg,
      &.recipe-card {
        path {
          fill: ${color.black};
        }
      }

      &.ribbon-award {
        circle,
        path {
          stroke: ${color.black};
        }
      }

      &.videos {
        circle {
          fill ${color.black};
          stroke: ${color.black};
        }

        path {
          stroke: ${color.black};
        }
      }

      &.phone {
        path {
          stroke: ${color.black};
        }

        circle {
          fill: ${color.black};
          stroke: ${color.black};
        }
      }
    }
  }
`;

const MembershipBenefitsIcons = () => (
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
          <CircularIcon className={benefit.icon}>
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

export default MembershipBenefitsIcons;
