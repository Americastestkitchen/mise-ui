import React from 'react';
import styled, { css } from 'styled-components';
import { Cookbook, Phone, RecipeCard, RibbonAward, Videos } from '../../DesignTokens/Icon/svgs';
import { color, font, withThemes } from '../../../styles';

type benefitIcons = {
  icon: 'card' | 'cookbook' | 'watch' | 'ratings' | 'mobile';
  desc: string;
};

const benefits: benefitIcons[] = [
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

const icons = {
  card: RecipeCard,
  cookbook: Cookbook,
  watch: Videos,
  ratings: RibbonAward,
  mobile: Phone,
};

const loopAnimation = () => {
  let styles = '';
  for (let i = 1; i < 6; i += 1) {
    styles += `&:nth-child(${i}) { animation-delay: ${1.2 * i}s}; `;
  }
  return css`${styles}`;
};

const MembershipBenefitsIconsWrapper = styled.div.attrs({
  className: 'membership-benefits-icons',
})`
  display: flex;
  justify-content: space-between;
`;

const Benefit = styled.div<{animated: boolean}>`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 6rem;
  ${({ animated }) => (animated ? 'animation: pulse 8s infinite ease-in-out;' : '')}
  ${loopAnimation()}

  @keyframes pulse {
    3% {
      transform: scale(1.15);
    }
    13% {
      transform: scale(1.15);
    }
    15% {
      transform: scale(1);
    }
  }
`;

const BenefitsDescriptionTheme = {
  default: css`
    color: ${color.white};
    font: 1.2rem/1.17 ${font.pnb};
    line-height: 1.2;
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
  `,
  light: css`
    color: ${color.eclipse};
  `,
};

const BenefitsDescription = styled.p`${withThemes(BenefitsDescriptionTheme)}`;

const CircularIconTheme = {
  default: css`
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
  `,
  light: css`
    background-color: ${color.eclipse};
  `,
};

const CircularIcon = styled.div`${withThemes(CircularIconTheme)}`;

export type MembershipBenefitsIconsProps = {
  animated?: boolean;
}

const MembershipBenefitIcons = ({
  animated = true,
}: MembershipBenefitsIconsProps) => (
  <MembershipBenefitsIconsWrapper
    data-testid="benefit-icons"
  >
    {benefits.map((benefit, idx) => {
      const { icon: iconType, desc } = benefit;
      const Icon = icons[iconType];
      return (
        <Benefit
          animated={animated}
          className="membership-benefit"
          data-testid={`membership-benefit-${idx}`}
          key={benefit.icon}
        >
          <CircularIcon>
            <Icon fill={color.white} />
          </CircularIcon>
          <BenefitsDescription>{desc}</BenefitsDescription>
        </Benefit>
      );
    })}
  </MembershipBenefitsIconsWrapper>
);

export default MembershipBenefitIcons;
