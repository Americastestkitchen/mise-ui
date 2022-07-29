import React from 'react';
import styled, { css } from 'styled-components';
import Gif from '../../../Gif';
import { getImageUrl, getGifSrcSet } from '../../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing, lineHeight, spacing, withThemes } from '../../../../styles';
import { md, xlg, mdToXlg } from '../../../../styles/breakpoints';

const SchoolAdWrapperTheme = {
  dark: css`
    background-color: ${color.mineShaft};
    position: relative;

    ${md(css`
      align-items: center;
      display: flex;
    `)}
  `,
};

const SchoolAdWrapper = styled.article.attrs({
  className: 'school-ad',
})`${withThemes(SchoolAdWrapperTheme)}`;

const SchoolAdFigure = styled.figure.attrs({
  className: 'school-ad__figure',
})`
  margin: 0;
  position: relative;

  ${md(css`
    flex: 0 0 34rem;
    height: 34rem;
    margin-bottom: 0;
    width: 34rem;

    img {
      height: 34rem;
      width: 34rem;
    }    
  `)}

  ${xlg(css`
    flex: 0 0 56rem;
    height: 33rem;
    width: 56rem;

    img {
      height: 33rem;
      width: 56rem;
    }
  `)}
`;

const AtkSchoolLogos = styled.img.attrs({
  className: 'school-ad__logos',
})`
  display: block;
  margin-bottom: ${spacing.sm};
  width: 20.5rem;
`;

const SchoolAdInfo = styled.div.attrs({
  className: 'school-ad__info',
})`
  align-items: center;
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  padding: 2rem 2rem 3.8rem;

  ${md(css`
    padding: 0;
  `)}
`;

const SchoolAdInnerInfo = styled.div`
  ${mdToXlg(css`
    padding: 0 ${spacing.sm};
  `)}

  ${xlg(css`
    width: 34.2rem;
  `)}
`;

const SchoolAdTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};
  `,
  dark: css`
    color: ${color.white};
  `,
};

const SchoolAdTitle = styled.h3.attrs({
  className: 'school-ad__title',
})`${withThemes(SchoolAdTitleTheme)}`;

const SchoolAdSubtitleTheme = {
  default: css`
    font: ${fontSize.md}/2.3rem ${font.pnr};
    margin-bottom: ${spacing.sm};
  `,
  dark: css`
    color: ${color.whiteSmoke}
  `,
};

const SchoolAdSubtitle = styled.h4.attrs({
  className: 'school-ad__subtitle',
})`${withThemes(SchoolAdSubtitleTheme)}`;

const SchoolAdCta = styled.a.attrs({
  className: 'school-ad__cta',
})`
  color: ${color.white};
  background-color: ${color.coldPool};
  display: block;
  flex: 1 0 100%;
  font: ${fontSize.lg}/4rem ${font.pnb};
  letter-spacing: ${letterSpacing.cta};
  height: 4rem;
  margin-top: ${spacing.xsm};
  text-align: center;
  text-transform: uppercase;
  transition: 0.2s background-color ease-in-out;
  white-space: nowrap;
  width: 100%;

  @media(hover: hover) {
    &:hover {
      background-color: ${color.darkColdPool};
    }
  }

  ${md(css`
    display: inline-block;
    margin: ${spacing.xsm} auto 0;
    width: 31.6rem;
  `)}

  ${xlg(css`
    width: 30.3rem;
  
  `)}
`;

const deviceConfigMap = {
  desktop: 'showcaseSchoolAdDesktop',
  tablet: 'showcaseSchoolAdTablet',
  phone: 'showcaseSchoolAdMobile',
};

const deviceIdMap = {
  desktop: 'mise-play/school-showcase-desktop-3',
  tablet: 'mise-play/school-showcase-tablet-3',
  phone: 'mise-play/school-showcase-tablet-3',
};

export type SchoolAdProps = {
  cta: string;
  ctaHref: string;
  ctaTarget: string;
  deviceType: 'desktop' | 'tablet' | 'phone';
  onClick: () => void;
  subtitle: string;
  title: string;
};

const SchoolAd = ({
  cta,
  ctaHref,
  ctaTarget = '',
  deviceType,
  onClick = () => {},
  subtitle,
  title,
}: SchoolAdProps) => (
  <SchoolAdWrapper>
    <SchoolAdFigure>
      <Gif
        srcSet={getGifSrcSet(
          deviceIdMap[deviceType],
          deviceConfigMap[deviceType],
        )}
      />
    </SchoolAdFigure>
    <SchoolAdInfo>
      <SchoolAdInnerInfo>
        <AtkSchoolLogos
          alt=""
          src={getImageUrl(
            'mise-play/atk-school-logo-lockup',
            'atkSchoolLogoLockup',
          )}
        />
        <SchoolAdTitle>{title}</SchoolAdTitle>
        <SchoolAdSubtitle>{subtitle}</SchoolAdSubtitle>
        <SchoolAdCta
          href={ctaHref}
          target={ctaTarget}
          onClick={onClick}
          title={cta}
        >
          {cta}
        </SchoolAdCta>
      </SchoolAdInnerInfo>
    </SchoolAdInfo>
  </SchoolAdWrapper>
);

export default SchoolAd;
