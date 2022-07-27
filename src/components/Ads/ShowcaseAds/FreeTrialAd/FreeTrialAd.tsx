import React from 'react';
import styled, { css } from 'styled-components';
import { md, lg, xlg } from '../../../../styles/breakpoints';
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

const FreeTrialWrapperTheme = {
  default: css`
    background-color: ${color.smokeyQuartz};
    ${md(css`
      align-items: center;
      display: flex;
      justify-content: space-between;
    `)}
    ${xlg(css`
      margin: 0 auto;
      max-width: 113.6rem;
    `)}
  `,
};

const FreeTrialWrapper = styled.div.attrs({
  className: 'free-trial-ad',
})`${withThemes(FreeTrialWrapperTheme)}`;

const FreeTrialPictureTheme = {
  default: css`
    display: block;
    width: 100%;

    img {
      display: block;
      width: 100%;
    }

    ${md(css`
      flex: 0 0 50%;
      width: 50%;
    `)}

    ${lg(css`
      flex: 0 0 56rem;
      max-width: 56rem;
      width: 56rem;
    `)}
  `,
};

const FreeTrialPicture = styled.picture.attrs({
  className: 'free-trial-ad__picture',
})`${withThemes(FreeTrialPictureTheme)}`;

const FreeTrialContentTheme = {
  default: css`
    padding: ${spacing.sm} 2rem;

    ${md(css`
      padding: ${spacing.sm};
      flex: 1 0 50%;
      width: 50%;
    `)}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const FreeTrialContent = styled.div.attrs({
  className: 'free-trial-ad__content',
})`${withThemes(FreeTrialContentTheme)}`;

const FreeTrialContentInner = styled.div`
  ${lg(css`
    margin: 0 auto;
    width: 34.4rem;
  `)}
`;

const FreeTrialTitleTheme = {
  default: css`
    font: 2.6rem/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};
  `,
};

const FreeTrialTitle = styled.div.attrs({
  className: 'free-trial-ad__title',
})`${withThemes(FreeTrialTitleTheme)}`;

const FreeTrialSubtitleTheme = {
  default: css`
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
    margin-bottom: ${spacing.xlg};
  `,
};

const FreeTrialSubtitle = styled.div.attrs({
  className: 'free-trial-ad__subtitle',
})`${withThemes(FreeTrialSubtitleTheme)}`;

const FreeTrialCtaTheme = {
  default: css`
    background-color: ${color.tomato};
    color: ${color.white};
    display: block;
    font: ${fontSize.lg}/4rem ${font.pnb};
    letter-spacing: ${letterSpacing.cta};
    height: 4rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s background-color ease-in-out;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${color.rust};
      }
    }
  `,
};

const FreeTrialCta = styled.a.attrs({
  className: 'free-trial-ad__cta',
})`${withThemes(FreeTrialCtaTheme)}`;

interface FreeTrialAd {
  cloudinaryId: string;
  cta: string;
  ctaHref: string;
  onClick: () => void;
  title: string;
  subtitle: string;
}

const FreeTrialAd = ({
  cloudinaryId,
  cta,
  ctaHref,
  onClick,
  subtitle,
  title,
}:FreeTrialAd) => (
  <FreeTrialWrapper>
    <FreeTrialPicture>
      <source
        media="(min-width: 1024px)"
        srcSet={getImageUrl(
          cloudinaryId,
          'showcaseFreeTrialDesktop',
        )}
      />
      <source
        media="(min-width: 768px)"
        srcSet={getImageUrl(
          cloudinaryId,
          'showcaseFreeTrialTablet',
        )}
      />
      <img
        alt=""
        crossOrigin="anonymous"
        decoding="async"
        data-testid="showcase-ad-img"
        src={getImageUrl(
          cloudinaryId,
          'showcaseFreeTrialMobile',
        )}
      />
    </FreeTrialPicture>
    <FreeTrialContent>
      <FreeTrialContentInner>
        <FreeTrialTitle>
          {title}
        </FreeTrialTitle>
        <FreeTrialSubtitle>
          {subtitle}
        </FreeTrialSubtitle>
        <FreeTrialCta
          href={ctaHref}
          onClick={onClick}
          title={cta}
        >
          {cta}
        </FreeTrialCta>
      </FreeTrialContentInner>
    </FreeTrialContent>
  </FreeTrialWrapper>
);

export default FreeTrialAd;
