import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { getImageUrl } from '../../../lib/cloudinary';
import { spacing } from '../../../styles';

/* eslint-disable indent */
const HeroHatWrapper = styled.div.attrs({
  className: 'hero-hat',
})`
  ${({ heroImages }) => (
    `background: no-repeat url("${getImageUrl(heroImages.mobile, { height: 157 })}") top left;`
  )}
  background-size: contain;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding-top: 7.6rem;

  ${breakpoint('md')`
    align-items: center;
    ${({ heroImages }) => (
      `background-image: url("${getImageUrl(heroImages.tablet, { width: 800 })}");`
    )}
    background-size: cover;
    display: flex;
    margin-bottom: ${spacing.sm};
    min-height: 16.7rem;
    padding-top: 0;
  `}

  ${breakpoint('xlg')`
    ${({ heroImages }) => (
      `background-image:url("${getImageUrl(heroImages.desktop, { width: 1600 })}");`
    )}
    background-position: center center;
    margin-bottom: ${spacing.lg};
  `}
`;

export default HeroHatWrapper;
