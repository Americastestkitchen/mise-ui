import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { Cookbook, Phone, RecipeCard, RibbonAward, Videos } from '../../DesignTokens/Icon/svgs';
import { color, font, withThemes } from '../../../styles';

const icons = {
  card: RecipeCard,
  cookbook: Cookbook,
  watch: Videos,
  ratings: RibbonAward,
  mobile: Phone,
} as const;

type IconKeys = keyof typeof icons;

type BenefitShape = { icon: IconKeys, desc: string };

const benefits: BenefitShape[] = [
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

const renderIcon = (icon: keyof typeof icons) => {
  const Icon = (icon ? icons[icon] : null) as Function;
  return <Icon fill={color.white} />;
};

const BenefitTheme = {
  default: css`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 6rem;
    ${({ animated }: { animated: boolean }) => (animated ? 'animation: pulse 8s infinite ease-in-out;' : '')}

    &:nth-child(1) { animation-delay: 1.2s; }
    &:nth-child(2) { animation-delay: 2.4s; }
    &:nth-child(3) { animation-delay: 3.6s; }
    &:nth-child(4) { animation-delay: 4.8s; }
    &:nth-child(5) { animation-delay: 6.0s; }

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

    p {
      color: ${color.white};
      font: 1.2rem/1.17 ${font.pnb};
      line-height: 1.2;
      margin-top: 1rem;
      text-align: center;
      text-transform: uppercase;
    }
  `,
  light: css`
    p {
      color: ${color.eclipse};
    }
  `,
};

const Benefit = styled.div<{ animated: boolean }>`
  ${withThemes(BenefitTheme)}
`;

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

const CircularIcon = styled.div`
  ${withThemes(CircularIconTheme)}
`;

const MembershipBenefitsIcons = ({ animated }: { animated: boolean }) => (
  <MembershipBenefitsIconsWrapper
    data-testid="benefit-icons"
  >
    {
      benefits.map((benefit, idx) => (
        <Benefit
          animated={animated}
          className="membership-benefit"
          data-testid={`membership-benefit-${idx}`}
          key={benefit.icon}
        >
          <CircularIcon>
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
