import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { getImageUrl } from '../../../lib/cloudinary';
import {
  color,
  font,
  fontSize,
  grid,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../styles';

/**
 * Wrapper
 */
const HeroAdWrapperTheme = {
  default: css`
    width: ${grid.columnWidth};

    ${breakpoint('xs', 'md')`
      overflow: hidden;
      padding-top: 3rem;
      width: 100%;
    `}
  `,
};

const HeroAdWrapper = styled.div.attrs({
  className: 'hero-ad',
})`${withThemes(HeroAdWrapperTheme)}`;

/**
 * Wrapper inner (background-color)
 */
const HeroAdInnerWrapperTheme = {
  default: css`
    background-color: ${({ backgroundColor }) => `${color[backgroundColor] || 'transparent'}`};
    padding: 0 ${spacing.sm};
    position: relative;
    width: calc(${grid.columnWidth} - 3rem);

    ${breakpoint('xs', 'md')`
      margin-left: 0;
      width: 100%;
    `}

    ${breakpoint('md')`
      padding: ${spacing.sm};
    `}
  `,
};

const HeroAdInnerWrapper = styled.div.attrs({
  className: 'hero-ad__inner',
})`${withThemes(HeroAdInnerWrapperTheme)}`;

/**
 * Content (title, subtitle, button, cta)
 */
const HeroAdContentTheme = {
  default: css`
    ${breakpoint('xs', 'smmd')`
      max-width: 20rem;
      min-width: 18.4rem;
    `}

    ${breakpoint('xs', 'md')`
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 26rem;
    `}

    ${breakpoint('smmd', 'md')`
      max-width: 34rem;
      width: calc(100% - 24rem);
    `}
  `,
};

const HeroAdContent = styled.div.attrs({
  className: 'hero-ad__content',
})`${withThemes(HeroAdContentTheme)}`;

/**
 * Main title
 */
const HeroAdTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};

    ${breakpoint('md')`
      text-align: center;
    `}
  `,
  dark: css`
    color: ${color.white}
  `,
};

const HeroAdTitle = styled.h3.attrs({
  className: 'hero-ad__title',
})`${withThemes(HeroAdTitleTheme)}`;

/**
 * Sub title
 */
const HeroAdSubtitleTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};
    text-align: center;

    ${breakpoint('xs', 'smmd')`
      display: none;
    `}
  `,
  dark: css`
    color: ${color.white}
  `,
};

const HeroAdSubtitle = styled.h3.attrs({
  className: 'hero-ad__subtitle',
})`${withThemes(HeroAdSubtitleTheme)}`;

/**
 * Image
 */
const HeroAdImageTheme = {
  default: css`
    display: block;
    height: 35rem;
    left: 50%;
    max-width: none;
    position: relative;
    transform: translateX(-47%);

    ${breakpoint('xs', 'md')`
      height: auto;
      left: 21rem;
      position: absolute;
      top: 50%;
      transform: translateY(-47%);
      width: 26rem;
    `}

    ${breakpoint('smmd', 'md')`
      left: auto;
      right: -4rem;
    `}
  `,
};

const HeroAdImage = styled.img.attrs({
  className: 'hero-ad__image',
})`${withThemes(HeroAdImageTheme)}`;

/**
 * Hero ad cta button
 */
const HeroAdCtaTheme = {
  default: css`
    color: ${color.white};
    background-color: ${({ backgroundColor }) => `${color[backgroundColor || 'eclipse']}`};
    display: block;
    font: ${fontSize.md}/4rem ${font.pnb};
    letter-spacing: ${letterSpacing.cta};
    height: 4rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s background-color ease-in-out;
    white-space: nowrap;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${({ hoverColor }) => `${color[hoverColor || 'rust']}`};
      }
    }
  `,
};

const HeroAdCta = styled.span.attrs({
  className: 'hero-ad__cta',
})`${withThemes(HeroAdCtaTheme)}`;

const HeroAds = ({
  backgroundColor,
  buttonColor,
  buttonHoverColor,
  cloudinaryId,
  cta,
  ctaHref,
  ctaTarget,
  onClick,
  subtitle,
  title,
}) => (
  <HeroAdWrapper>
    <a
      href={ctaHref}
      target={ctaTarget}
      onClick={onClick}
      title={cta}
    >
      <HeroAdInnerWrapper
        backgroundColor={backgroundColor}
        data-testid="hero-ad__inner"
      >
        <HeroAdContent>
          <HeroAdTitle>
            {title}
          </HeroAdTitle>
          {subtitle && (
            <HeroAdSubtitle>
              {subtitle}
            </HeroAdSubtitle>
          )}
          <HeroAdImage
            alt=""
            data-testid="hero-ad__image"
            src={getImageUrl(
              cloudinaryId,
              'heroAd',
            )}
          />
          <HeroAdCta
            backgroundColor={buttonColor}
            data-testid="hero-ad__cta"
            hoverColor={buttonHoverColor}
          >
            {cta}
          </HeroAdCta>
        </HeroAdContent>
      </HeroAdInnerWrapper>
    </a>
  </HeroAdWrapper>
);

HeroAds.propTypes = {
  backgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonHoverColor: PropTypes.string,
  cloudinaryId: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  ctaTarget: PropTypes.string,
  onClick: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

HeroAds.defaultProps = {
  backgroundColor: 'transparent',
  buttonColor: 'tomato',
  buttonHoverColor: null,
  ctaTarget: null,
  onClick: null,
  subtitle: null,
};

export default HeroAds;
