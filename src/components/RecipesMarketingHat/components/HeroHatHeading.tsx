import styled, { css } from 'styled-components';
import { md, xlg } from '../../../styles/breakpoints';
import { font, spacing } from '../../../styles';

const HeroHatHeading = styled.h2.attrs<{ isTall: string; }>(
  ({ isTall }) => ({ className: `hero-hat__heading ${isTall}` }))<{isTall: string}>`
  font: 2.9rem/${spacing.lg} ${font.mwr};
  font-weight: 600;
  height: 4.1rem;
  
  &.is-tall {
    font: 1.6rem/1 ${font.pnb};
    text-transform: uppercase;
    letter-spacing: 1.41px;
    margin-bottom: 0.6rem;
    height: auto;
  }
  
  ${md(css`
    font-size: 2.8rem;
    line-height: 1.39;

    &.is-tall {
      font-size: 2.0rem;
    }
  `)}

  ${xlg(css`
    font-size: 3.2rem;
    line-height: 4.6rem;
    white-space: nowrap;
    margin-bottom: 1.6rem;

    &.is-tall {
      margin-bottom: 1rem;
    }
  `)}
`;

export default HeroHatHeading;
