import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { font, spacing } from '../../../styles';

const HeroHatHeading = styled.h2.attrs({
  className: 'hero-hat__heading',
})`
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
  
  ${breakpoint('md')`
    font-size: 2.8rem;
    line-height: 1.39;

    &.is-tall {
      font-size: 2.0rem;
    }
  `}

  ${breakpoint('xlg')`
    font-size: 3.2rem;
    line-height: 4.6rem;
    white-space: nowrap;
    margin-bottom: 1.6rem;

    &.is-tall {
      margin-bottom: 1rem;
    }
  `}
`;

export default HeroHatHeading;
