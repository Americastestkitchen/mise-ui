import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  font,
  fontSize,
} from '../../../styles';

const HeroHatDescription = styled.p.attrs({
  className: 'hero-hat__description',
})`
  font: ${fontSize.md}/2.2rem ${font.pnr};
  margin-bottom: 1rem;
  margin-right: 0.1rem;
  height: 2.2rem;
  margin-bottom: 3rem;

  .hide-tablet {
    display: none;
  }

  &.is-tall {
    color: #3d3d3d;
    font: 1.6rem/1.19 ${font.pnr};
    height: 8rem;
    margin-bottom: 0.5rem;
    max-width: 31.1rem;

    .hide-tablet {
      display: inline;

      br {
        display: none;
      }
    }

    @media screen and (min-width: 368px) {
      height: 6.4rem;
    }

    @media screen and (min-width: 768px) {
      height: 4.7rem;
      line-height: 2rem;
      max-width: 47.1rem;
    }

    @media screen and (min-width: 1136px) {
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
      white-space: normal;
      line-height: 2.3rem;
    }
  }

  ${breakpoint('md')`
    margin-bottom: 0;
    margin-right: 0;
    line-height: 2rem;
    height: 4.8rem;
  `}

  ${breakpoint('lg')`
    line-height: 2.3rem;

    .hide-tablet {
      display: inline;
    }
  `}
  
  ${breakpoint('xlg')`
    font-size: 1.8rem;
    white-space: nowrap;
  `}

  @media screen and (min-width: 1680px) {
    margin: 0.6rem 0;
  }
`;

export default HeroHatDescription;
