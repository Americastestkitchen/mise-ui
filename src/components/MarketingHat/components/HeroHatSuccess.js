import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import {
  font,
  fontSize,
  lineHeight,
  spacing,
} from '../../../styles';

const HeroHatSuccess = styled.div.attrs({
  className: 'hero-hat__success',
})`
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  margin-top: 1rem;

  svg {
    display: inline-block;
    height: 1.4rem;
    margin-right: ${spacing.xxsm};
    margin-top: 0.5rem;
    width: 2.1rem;

    ${breakpoint('md')`
      margin-right: ${spacing.xsm};
    `}
  }

  span {
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb} 700;
  }
`;

export default HeroHatSuccess;
