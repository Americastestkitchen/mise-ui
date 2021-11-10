import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import {
  font,
  fontSize,
} from '../../../styles';

const HeroHatDescription = styled.p.attrs({
  className: 'hero-hat__description',
})`
  font: ${fontSize.md}/1.22 ${font.pnr};
  margin-bottom: 1rem;

  ${breakpoint('sm', 'smmd')`
    .thanksgiving-hat & {
      padding-right: 1rem;
    }
    .holiday-hat & {
      padding-right: 1rem;
    }
  `}

  ${breakpoint('md')`
    margin-bottom: 0;
    font-size: ${fontSize.lg};
    line-height: 2.3rem;
  `}

  ${breakpoint('xlg')`
    white-space: nowrap;
  `}
`;

export default HeroHatDescription;
