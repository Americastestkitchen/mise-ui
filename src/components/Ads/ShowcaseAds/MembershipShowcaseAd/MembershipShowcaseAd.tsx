import React from 'react';
import styled, { css } from 'styled-components';

import Gif from '../../../Gif';
import MembershipBenefitIcons from '../../components/MembershipBenefitsIcons';
import { getGifSrcSet } from '../../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing, lineHeight, spacing, withThemes } from '../../../../styles';
import { md, lg, xlg } from '../../../../styles/breakpoints';

const MembershipShowcaseTheme = {
  default: css`
    margin: 0 auto;
    max-width: 113.6rem;

    ${md(css`
      align-items: center;
      display: flex;
    `)}
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const MembershipShowcase = styled.article.attrs({
  className: 'membership-showcase-ad',
})`${withThemes(MembershipShowcaseTheme)}`;

const MembershipShowcaseTitle = styled.h3.attrs({
  className: 'membership-showcase-ad__title',
})`
  color: ${color.whiteSmoke};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.sm};

  ${lg(css`
    font: 2.6rem/${lineHeight.sm} ${font.pnb};
  `)}
`;

const MembershipShowcaseFigure = styled.figure`
  position: relative;
  margin: 0 0 2rem;

  ${md(css`
    flex: 0 0 34rem;
    margin-bottom: 0;
    width: 34rem;

    img {
      height: 33rem;
      width: 34rem;
    }
  `)}

  ${xlg(css`
    flex: 0 0 56rem;
    width: 56rem;

    img {
      height: 33rem;
      width: 56rem;
    }
  `)}
`;

const MembershipCta = styled.a.attrs({
  className: 'membership-showcase-ad__cta',
})`
  background-color: ${color.frog};
  color: ${color.white};
  display: block;
  font: ${fontSize.lg}/4rem ${font.pnb};
  height: 4rem;
  letter-spacing: ${letterSpacing.cta};
  margin-bottom: ${spacing.sm};
  text-align: center;
  text-transform: uppercase;
  transition: 0.2s background-color ease-in-out;
  width: 100%;
  
  @media(hover: hover) {
    &:hover {
      background-color: ${color.darkFrog};
    }
  }
`;

const MembershipShowcaseContent = styled.div`
  padding: 0 2rem;

  .membership-benefits-icons {
    margin-bottom: ${spacing.sm};
  }

  ${lg(css`
    padding: 0 5rem;
  `)}
`;

const deviceConfigMap = {
  desktop: 'membershipSingleDesktop',
  tablet: 'membershipSingleTablet',
  phone: 'membershipSingleMobile',
};

const deviceIdMap = {
  desktop: 'mise-play/membership-showcase-desktop-3',
  tablet: 'mise-play/membership-showcase-tablet-3',
  phone: 'mise-play/membership-showcase-tablet-3',
};

export type MembershipShowcaseAdProps = {
  cta: string;
  ctaHref: string;
  deviceType: 'desktop' | 'tablet' | 'phone';
  onClick?: () => void;
  title: () => HTMLElement | JSX.Element;
};

const MembershipShowcaseAd = ({
  cta,
  ctaHref,
  deviceType,
  onClick = () => {},
  title,
}: MembershipShowcaseAdProps) => (
  <MembershipShowcase>
    <MembershipShowcaseFigure>
      <Gif
        srcSet={getGifSrcSet(
          deviceIdMap[deviceType],
          deviceConfigMap[deviceType])}
      />
    </MembershipShowcaseFigure>
    <MembershipShowcaseContent>
      <MembershipShowcaseTitle>{title()}</MembershipShowcaseTitle>
      <MembershipBenefitIcons animated={false} />
      <MembershipCta
        href={ctaHref}
        onClick={onClick}
        title={cta}
      >
        {cta}
      </MembershipCta>
    </MembershipShowcaseContent>
  </MembershipShowcase>
);

export default MembershipShowcaseAd;
