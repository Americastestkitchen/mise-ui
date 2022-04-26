import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { getImageUrl } from '../../../lib/cloudinary';
import { spacing } from '../../../styles';

/* eslint-disable indent */
const HeroHatWrapper = styled.div.attrs({
  className: 'hero-hat',
})`
  ${({ heroImages }) => (
    `background: no-repeat url("${getImageUrl(heroImages.mobile, { height: 167 })}") top left;`
  )}
  background-size: contain;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding-top: 7.6rem;

  &.is-tall {
    ${({ heroImages }) => (
      `background: no-repeat url("${getImageUrl(heroImages.mobileTall, { height: 167 })}") top left;`
    )}
    background-size: contain;
    justify-content: center;
    min-height: 9.5rem;
  }

  ${breakpoint('md')`
    align-items: center;
    ${({ heroImages }) => (
      `background-image: url("${getImageUrl(heroImages.tablet, { width: 768 })}");`
    )}
    background-size: cover;
    margin-bottom: 0;
    min-height: 16.7rem;
    padding-top: 0;

      &.is-tall {
        ${({ heroImages }) => (
          `background-image: url("${getImageUrl(heroImages.tabletTall, { width: 768 })}");`
        )}
        align-items: center;
        align-items: flex-start;
        background-size: cover;
        margin-bottom: 0;
        min-height: 28rem;
      }
  `}

  ${breakpoint('xlg')`
    ${({ heroImages }) => (
      `background-image: url("${getImageUrl(heroImages.desktop, { width: 1400 })}");`
    )}
    background-position: center center;
    
    &.is-tall {
      ${({ heroImages }) => (
        `background-image: url("${getImageUrl(heroImages.desktopTall, { width: 768 })}");`
      )}
      background-position: center center;
      margin-bottom: 0;
      min-height: 31.3rem;
    }
  `}

  @media screen and (min-width: 1680px) {
    ${({ heroImages }) => (
      `background-image: url("${getImageUrl(heroImages.desktopLg, { width: 1400 })}");`
    )}

    &.is-tall {
      ${({ heroImages }) => (
        `background-image: url("${getImageUrl(heroImages.desktopLgTall, { width: 1400 })}");`
      )}    
    }
  }
`;

export default HeroHatWrapper;
