import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import MembershipBenefitIcons from '../../components/MembershipBenefitsIcons';
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

const MembershipShowcaseCaptionTheme = {
  default: css`
    bottom: ${spacing.sm};
    color: ${color.whiteSmoke};
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnr};
    left: ${spacing.sm};
    position: absolute;
  `,
};

const MembershipShowcaseCaption = styled.figcaption.attrs({
  className: 'membership-showcase-ad__caption',
})`${withThemes(MembershipShowcaseCaptionTheme)}`;

const MembershipShowcasePictureTheme = {
  default: css`
    display: block;
  `,
};

const MembershipShowcaseFigure = styled.figure`
  position: relative;
  margin: 0 0 2rem;

  img {
    display: block;
  }

  ${breakpoint('md')`
    flex: 0 0 34rem;
    margin-bottom: 0;
    width: 34rem;
  `}

  ${breakpoint('lg')`
    flex: 0 0 56rem;
    width: 56rem;
  `}
`;

const MembershipShowcasePicture = styled.picture.attrs({
  className: 'membership-showcase-ad__picture',
})`${withThemes(MembershipShowcasePictureTheme)}`;

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

const MembershipShowcaseAd = ({
  caption,
  cloudinaryId,
  cta,
  ctaHref,
  title,
}) => (
  <MembershipShowcase>
    <MembershipShowcaseFigure>
      <MembershipShowcasePicture>
        <source
          media="(min-width: 1024px)"
          srcSet={getImageUrl(
            cloudinaryId,
            'membershipSingleDesktop',
          )}
        />
        <source
          media="(min-width: 768px)"
          srcSet={getImageUrl(
            cloudinaryId,
            'membershipSingleTablet',
          )}
        />
        <img
          alt=" "
          data-testid="membership-showcase-ad-img"
          src={getImageUrl(
            cloudinaryId,
            'membershipSingleMobile',
          )}
        />
      </MembershipShowcasePicture>
      {caption && (
        <MembershipShowcaseCaption>
          {caption}
        </MembershipShowcaseCaption>
      )}
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
  caption: PropTypes.string,
  cloudinaryId: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  title: PropTypes.func.isRequired,
};

MembershipShowcaseAd.defaultProps = {
  caption: null,
};

export default MembershipShowcaseAd;
