import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import MembershipBenefitsIcons from '../../components/MembershipBenefitsIcons';
import { getImageUrl } from '../../../../lib/cloudinary';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

const MembershipShowcaseAdWrapper = styled.div`
    background-color: ${color.smokeyQuartz};

    ${breakpoint('md')`
      align-items: stretch;
      display: flex;
      justify-content: space-between;
      max-height: 33rem;
    `}

    ${breakpoint('xlg')`
      margin: 0 auto;
      max-width: 113.6rem;
    `}
`;

/**
 * Membership Ad image
 */
const MembershipAdPictureTheme = {
  default: css`
    display: block;
    position: relative;
    width: 100%;

    img {
      display: block;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    ${breakpoint('md')`
      flex: 0 0 50%;
      width: 50%;
    `}

    ${breakpoint('lg')`
      flex: 0 0 56rem;
      max-width: 56rem;
      width: 56rem;
    `}
  `,
};

const MembershipAdPicture = styled.picture.attrs({
  className: 'showcase-ad__membership-image',
})`${withThemes(MembershipAdPictureTheme)}`;

const MembershipContentTheme = {
  default: css`
    ${breakpoint('md')`
      padding: ${spacing.sm};
      flex: 1 0 50%;
      width: 50%;
    `}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const MembershipContent = styled.div.attrs({
  className: 'showcase-ad__membership-content',
})`${withThemes(MembershipContentTheme)}`;

const MembershipAdTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.md} ${font.pnb};
    margin: 2rem auto;

    ${breakpoint('lg')`
      font: 2.6rem/${lineHeight.sm} ${font.pnb};
    `}
  `,
  dark: css`
    color: ${color.whiteSmoke};
  `,
};

const MembershipTitle = styled.h4.attrs({
  className: 'showcase-ad__membership-title',
})`${withThemes(MembershipAdTitleTheme)}`;

const MembershipAdCtaTheme = {
  default: css`
    background-color: ${color.wasabi};
    display: block;
    font: ${fontSize.lg}/4rem ${font.pnb};
    letter-spacing: ${letterSpacing.xlg};
    height: 4rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 1.4rem;
    width: 100%;
  `,
  dark: css`
    color: ${color.white};
  `,
};

const MembershipAdCta = styled.a.attrs({
  className: 'showcase-ad__membership-cta',
})`${withThemes(MembershipAdCtaTheme)}`;

const MembershipShowcaseAd = ({
  title,
  cloudinaryId,
  cta,
  ctaHref,
}) => (
  <MembershipShowcaseAdWrapper className="showcase-ad__membership">
    <MembershipAdPicture>
      <source
        media="(min-width: 1024px)"
        srcSet={getImageUrl(
          cloudinaryId,
          'membershipShowcaseDesktop',
        )}
      />
      <source
        media="(min-width: 768px)"
        srcSet={getImageUrl(
          cloudinaryId,
          'membershipShowcaseTablet',
        )}
      />
      <img
        alt=" "
        data-testid="membership-showcase-ad-img"
        src={getImageUrl(
          cloudinaryId,
          'membershipShowcaseMobile',
        )}
      />
    </MembershipAdPicture>
    <MembershipContent>
      <MembershipTitle>{title()}</MembershipTitle>
      <MembershipBenefitsIcons />
      <MembershipAdCta title={cta} href={ctaHref}>
        {cta}
      </MembershipAdCta>
    </MembershipContent>
  </MembershipShowcaseAdWrapper>
);

MembershipShowcaseAd.propTypes = {
  /** text to display on ad */
  title: PropTypes.func.isRequired,
  /** Cloudinary Id of image to display */
  cloudinaryId: PropTypes.string.isRequired,
  /** text to display on cta */
  cta: PropTypes.string.isRequired,
  /** URL for cta */
  ctaHref: PropTypes.string.isRequired,
};

export default MembershipShowcaseAd;
