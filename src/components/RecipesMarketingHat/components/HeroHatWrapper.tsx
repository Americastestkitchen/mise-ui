import styled, { css } from 'styled-components';
import { md, xlg } from '../../../styles/breakpoints';
import { getImageUrl } from '../../../lib/cloudinary';
import { HeroImagesType } from '../RecipesMarketingHat';

const HeroHatWrapperMobileLayout = css<{heroImages: HeroImagesType}>`
  ${({ heroImages }) => (`
    background: no-repeat url("${getImageUrl(heroImages.mobile, { height: 167 })}") top left;
    background-size: contain;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    padding-top: 7.6rem;

    &.is-tall {
      background: no-repeat url("${getImageUrl(heroImages.mobileTall, { height: 167 })}") top left;
      background-size: contain;
      justify-content: center;
      min-height: 9.5rem;
    }
  `)}
`;

const HeroHatWrapperTabletLayout = css<{heroImages: HeroImagesType}>`
  ${({ heroImages }) => md(`
    align-items: center;
    background-image: url("${getImageUrl(heroImages.tablet, { width: 768 })}");
    background-size: cover;
    margin-bottom: 0;
    min-height: 16.7rem;
    padding-top: 0;

    &.is-tall {
      align-items: center;
      align-items: flex-start;
      background-image: url("${getImageUrl(heroImages.tabletTall, { width: 768 })}");
      background-size: cover;
      margin-bottom: 0;
      min-height: 28rem;
    }
  `)}
`;

const HeroHatWrapperDesktopLayout = css<{heroImages: HeroImagesType;}>`
  ${({ heroImages }) => xlg(`
    background-image: url("${getImageUrl(heroImages.desktop, { width: 1400 })}");
    background-position: center center;  
  
    &.is-tall {  
      background-image: url("${getImageUrl(heroImages.desktopTall, { width: 768 })}");
      background-position: center center;
      margin-bottom: 0;
      min-height: 31.3rem;
    }
  `)}
`;

const ImageLayout = css`
  ${HeroHatWrapperMobileLayout}
  ${HeroHatWrapperTabletLayout}
  ${HeroHatWrapperDesktopLayout}
`;

const HeroHatWrapper = styled.div<{heroImages: HeroImagesType}>`
  ${ImageLayout}

  @media screen and (min-width: 1680px) {
    ${({ heroImages }) => (`
      background: url("${getImageUrl(heroImages.desktopLg, { width: 1400 })}");
    `)}

    &.is-tall {
      ${({ heroImages }) => (`
        background: url("${getImageUrl(heroImages.desktopLgTall, { width: 1400 })}");
      `)}
    }
  }
`;

export default HeroHatWrapper;
