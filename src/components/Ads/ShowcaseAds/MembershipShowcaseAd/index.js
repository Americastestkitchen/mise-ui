import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Gif from '../../../Gif';
import MembershipBenefitIcons from '../../components/MembershipBenefitsIcons';
import { getGifSrcSet } from '../../../../lib/cloudinary';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

const MembershipShowcaseTheme = {
  default: css`
    margin: 0 auto;
    max-width: 113.6rem;

    ${breakpoint('md')`
      align-items: center;
      display: flex;
    `}
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const MembershipShowcase = styled.article.attrs({
  className: 'membership-showcase-ad',
})`${withThemes(MembershipShowcaseTheme)}`;

const MembershipShowcaseTitleTheme = {
  default: css`
    color: ${color.whiteSmoke};
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};

    ${breakpoint('lg')`
      font: 2.6rem/${lineHeight.sm} ${font.pnb};
    `}
  `,
};

const MembershipShowcaseTitle = styled.h3.attrs({
  className: 'membership-showcase-ad__title',
})`${withThemes(MembershipShowcaseTitleTheme)}`;

const MembershipShowcaseFigure = styled.figure`
  position: relative;
  margin: 0 0 2rem;

  ${breakpoint('md')`
    flex: 0 0 34rem;
    height: 33rem;
    margin-bottom: 0;
    width: 34rem;

    img {
      height: 33rem;
      width: 34rem;
    }
  `}

  ${breakpoint('lg')`
    flex: 0 0 56rem;
    width: 56rem;

    img {
      width: 56rem;
    }
  `}
`;

const MembershipCtaTheme = {
  default: css`
    background-color: ${color.wasabi};
    color: ${color.white};
    display: block;
    font: ${fontSize.lg}/4rem ${font.pnb};
    height: 4rem;
    letter-spacing: ${letterSpacing.xlg};
    margin-bottom: ${spacing.sm};
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${color.olive};
      }
    }
  `,
};

const MembershipCta = styled.a.attrs({
  className: 'membership-showcase-ad__cta',
})`${withThemes(MembershipCtaTheme)}`;

const MembershipShowcaseContent = styled.div`
  padding: 0 2rem;

  .membership-benefits-icons {
    margin-bottom: ${spacing.sm};
  }

  ${breakpoint('lg')`
    padding: 0 5rem;
  `}
`;

const deviceConfigMap = {
  desktop: 'membershipSingleDesktop',
  tablet: 'membershipSingleTablet',
  phone: 'membershipSingleMobile',
};

const deviceIdMap = {
  desktop: 'mise-play/membership-showcase-desktop',
  tablet: 'mise-play/membership-showcase-tablet',
  phone: 'mise-play/membership-showcase-desktop',
};

const MembershipShowcaseAd = ({
  cta,
  ctaHref,
  deviceType,
  title,
}) => (
  <MembershipShowcase>
    <MembershipShowcaseFigure>
      <Gif
        srcSet={getGifSrcSet(
          deviceIdMap[deviceType],
          deviceConfigMap[deviceType],
        )}
      />
    </MembershipShowcaseFigure>
    <MembershipShowcaseContent>
      <MembershipShowcaseTitle>
        {title()}
      </MembershipShowcaseTitle>
      <MembershipBenefitIcons />
      <MembershipCta
        href={ctaHref}
        title={cta}
      >
        {cta}
      </MembershipCta>
    </MembershipShowcaseContent>
  </MembershipShowcase>
);

MembershipShowcaseAd.propTypes = {
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  deviceType: PropTypes.oneOf(['desktop', 'phone', 'tablet']).isRequired,
  title: PropTypes.func.isRequired,
};

export default MembershipShowcaseAd;
