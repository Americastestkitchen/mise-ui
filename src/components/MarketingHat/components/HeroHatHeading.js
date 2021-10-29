import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  font,
  fontSize,
  spacing,
} from '../../../styles';

const HeroHatHeading = styled.h2.attrs({
  className: 'hero-hat__heading',
})`
  font: 2.6rem/${spacing.lg} ${font.mwr};
  font-weight: 600;
  margin-bottom: 0.6rem;

  ${breakpoint('md')`
    font-size: ${fontSize.xxl};
    line-height: 3.9rem;
  `}

  ${breakpoint('xlg')`
    line-height: 4.6rem;
    white-space: nowrap;

    .hero-hat.thanksgiving-hat & {
      white-space: normal;
    }
  `}
`;

export default HeroHatHeading;
