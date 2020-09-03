import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Badge from '../../../Badge';
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

/**
 * Wrapper
 */
const SchoolTheme = {
  dark: css`
    background-color: ${color.mineShaft};
    position: relative;

    .badge {
      left: ${spacing.xsm};
      position: absolute;
      top: ${spacing.xsm};
    }

    ${breakpoint('md')`
      align-items: center;
      display: flex;
    `}
  `,
};

const School = styled.article.attrs({
  className: 'school-ad',
})`${withThemes(SchoolTheme)}`;

const SchoolFigure = styled.figure.attrs({
  className: 'school-ad__figure',
})`
  margin: 0;
  position: relative;
`;

const SchoolCaption = styled.figcaption`
  bottom: ${spacing.sm};
  color: ${color.white};
  font: ${fontSize.sm}/${lineHeight.sm} ${font.pnr};
  left: ${spacing.sm};
  position: absolute;
`;

/**
 * Picture
 */
const SchoolPictureTheme = {
  dark: css`
    display: block;

    img {
      display: block;
    }

    ${breakpoint('md')`
      flex: 0 0 34rem;
      width: 34rem;
    `}

    ${breakpoint('lg')`
      flex: 0 0 56rem;
      width: 56rem;
    `}
  `,
};

const SchoolPicture = styled.picture.attrs({
  className: 'school-ad__picture',
})`${withThemes(SchoolPictureTheme)}`;

const AtkSchoolLogos = styled.img.attrs({
  className: 'school-ad__logos',
})`
  display: block;
  margin-bottom: ${spacing.sm};
  width: 20.5rem;
`;

/**
 * School info
 */
const SchoolInfoTheme = {
  default: css`
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    padding: 2rem 2rem 3.8rem;

    ${breakpoint('md')`
      padding: 0;
      margin-left: ${spacing.sm};
      width: calc(50% - ${spacing.lg});
    `}
  `,
};
const SchoolInfo = styled.div.attrs({
  className: 'school-ad__info',
})`${withThemes(SchoolInfoTheme)}`;

const SchoolInfoInner = styled.div`
  ${breakpoint('lg')`
    width: 34.4rem;
  `}
`;

/**
 * School title
 */
const SchoolTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};
  `,
  dark: css`
    color: ${color.white}
  `,
};
const SchoolTitle = styled.h3.attrs({
  className: 'school-ad__title',
})`${withThemes(SchoolTitleTheme)}`;

/**
 * School subtitle
 */
const SchoolSubtitleTheme = {
  default: css`
    font: ${fontSize.md}/2.3rem ${font.pnr};
    margin-bottom: ${spacing.sm};
  `,
  dark: css`
    color: ${color.whiteSmoke}
  `,
};

const SchoolSubtitle = styled.h4.attrs({
  className: 'school-ad__subtitle',
})`${withThemes(SchoolSubtitleTheme)}`;

/**
 * School cta button
 */
const SchoolCtaTheme = {
  default: css`
    color: ${color.white};
    background-color: ${color.summerSky};
    display: block;
    flex: 1 0 100%;
    font: ${fontSize.lg}/4rem ${font.pnb};
    letter-spacing: ${letterSpacing.xlg};
    height: 4rem;
    margin-top: ${spacing.xsm};
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${color.endeavour};
      }
    }

    ${breakpoint('md')`
      display: inline-block;
      margin: ${spacing.xsm} auto 0;
      width: 31.6rem;
    `}

    ${breakpoint('lg')`
      width: 30.3rem;
    `}
  `,
};

const SchoolCta = styled.a.attrs({
  className: 'school-ad__cta',
})`${withThemes(SchoolCtaTheme)}`;

const SchoolAd = ({
  caption,
  cloudinaryId,
  cta,
  ctaHref,
  ctaTarget,
  siteKey,
  subtitle,
  title,
}) => (
  <School>
    <SchoolFigure>
      <SchoolPicture>
        <source
          media="(min-width: 1024px)"
          srcSet={getImageUrl(
            cloudinaryId,
            'showcaseSchoolAdDesktop',
          )}
        />
        <source
          media="(min-width: 768px)"
          srcSet={getImageUrl(
            cloudinaryId,
            'showcaseSchoolAdTablet',
          )}
        />
        <img
          alt=" "
          data-testid="school-img"
          src={getImageUrl(
            cloudinaryId,
            'showcaseSchoolAdMobile',
          )}
        />
      </SchoolPicture>
      {caption && (
        <SchoolCaption>
          {caption}
        </SchoolCaption>
      )}
    </SchoolFigure>
    <SchoolInfo>
      <SchoolInfoInner>
        <AtkSchoolLogos
          alt=" "
          src={getImageUrl(
            'mise-play/atk-school-logo-lockup',
            'atkSchoolLogoLockup',
          )}
        />
        <SchoolTitle>
          {title}
        </SchoolTitle>
        <SchoolSubtitle>
          {subtitle}
        </SchoolSubtitle>
        <SchoolCta
          href={ctaHref}
          target={ctaTarget}
          title={cta}
        >
          {cta}
        </SchoolCta>
      </SchoolInfoInner>
    </SchoolInfo>
    <Badge
      type={siteKey}
    />
  </School>
);

SchoolAd.propTypes = {
  caption: PropTypes.string,
  cloudinaryId: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  ctaTarget: PropTypes.string,
  siteKey: PropTypes.oneOf(['atk', 'cio', 'cco', 'kids', 'school', 'shop']).isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SchoolAd.defaultProps = {
  caption: null,
  ctaTarget: null,
};

export default SchoolAd;
