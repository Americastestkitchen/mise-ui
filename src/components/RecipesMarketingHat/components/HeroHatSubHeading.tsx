import styled, { css } from 'styled-components';
import { md, xlg } from '../../../styles/breakpoints';

import { font } from '../../../styles';

const HeroHatSubHeading = styled.h2.attrs<{isTall: string}>(
  ({ isTall }) => ({ className: `hero-hat__subheading ${isTall}` }))<{isTall: string}>`
  display: none;
  
  &.is-tall {
    font: bold 2.9rem/1 ${font.mwr};
    display: block;
    color: #3d3d3d;
    margin-bottom: 0.6rem;

    ${md(css`
      font-size: 3.2rem;
      margin-bottom: 0.8rem;
    `)}
  
    ${xlg(css`
      margin-bottom: 0.2rem;
    `)}
  }
`;

export default HeroHatSubHeading;
