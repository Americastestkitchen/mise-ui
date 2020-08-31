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

const SingleMembershipTheme = {
  default: css`
    ${breakpoint('md')`
      align-items: center;
      display: flex;
    `}
  `,
};

const SingleMembership = styled.article.attrs({
  className: 'single-membership-ad',
})`${withThemes(SingleMembershipTheme)}`;

const SingleMembershipTitleTheme = {
  default: css`
    color: ${color.whiteSmoke};
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};

    ${breakpoint('lg')`
      font: 2.6rem/${lineHeight.sm} ${font.pnr};
    `}
  `,
};

const SingleMembershipTitle = styled.h3.attrs({
  className: 'single-membership-ad__title',
})`${withThemes(SingleMembershipTitleTheme)}`;

const SingleMembershipCaptionTheme = {
  default: css`
    bottom: ${spacing.sm};
    color: ${color.whiteSmoke};
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnr};
    left: ${spacing.sm};
    position: absolute;
  `,
};

const SingleMembershipCaption = styled.figcaption.attrs({
  className: 'single-membership-ad__caption',
})`${withThemes(SingleMembershipCaptionTheme)}`;

const SingleMembershipPictureTheme = {
  default: css`
    display: block;
  `,
};

const SingleMembershipFigure = styled.figure`
  position: relative;
  margin: 0 0 2rem;

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

const SingleMembershipPicture = styled.picture.attrs({
  className: 'single-membership-ad__picture',
})`${withThemes(SingleMembershipPictureTheme)}`;

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
  `,
};

const MembershipCta = styled.a.attrs({
  className: 'single-membership-ad__cta',
})`${withThemes(MembershipCtaTheme)}`;

const SingleMembershipContent = styled.div`
  padding: 0 2rem;

  .membership-benefits-icons {
    margin-bottom: ${spacing.sm};
  }
`;

const SingleProductMembershipAd = ({
  caption,
  cloudinaryId,
  cta,
  ctaHref,
  title,
}) => (
  <SingleMembership>
    <SingleMembershipFigure>
      <SingleMembershipPicture>
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
          data-testid="single-membership-ad-img"
          src={getImageUrl(
            cloudinaryId,
            'membershipSingleMobile',
          )}
        />
      </SingleMembershipPicture>
      {caption && (
        <SingleMembershipCaption>
          {caption}
        </SingleMembershipCaption>
      )}
    </SingleMembershipFigure>
    <SingleMembershipContent>
      <SingleMembershipTitle>
        {title()}
      </SingleMembershipTitle>
      <MembershipBenefitIcons />
      <MembershipCta
        href={ctaHref}
        title={cta}
      >
        {cta}
      </MembershipCta>
    </SingleMembershipContent>
  </SingleMembership>
);

SingleProductMembershipAd.propTypes = {
  caption: PropTypes.string,
  cloudinaryId: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  title: PropTypes.func.isRequired,
};

SingleProductMembershipAd.defaultProps = {
  caption: null,
};

export default SingleProductMembershipAd;
