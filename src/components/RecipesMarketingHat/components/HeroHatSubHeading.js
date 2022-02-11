import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { font } from '../../../styles';

const HeroHatSubHeading = styled.h2.attrs({
  className: 'hero-hat__subheading',
})`
  display: none;

  &.is-tall {
    font: bold 2.9rem/1 ${font.mwr};
    display: block;
    color: #3d3d3d;
    margin-bottom: 0.6rem;

    ${breakpoint('md')`
      font-size: 3.2rem;
      margin-bottom: 0.8rem;
    `}

    ${breakpoint('xlg')`
      margin-bottom: 0.2rem;
    `}
`;

export default HeroHatSubHeading;
