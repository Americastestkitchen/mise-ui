import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color } from '../../../styles';

const HeroHatContent = styled.div.attrs({
  className: 'hero-hat__content',
})`
  color: ${color.eclipse};
  flex: 1 0 0;


  &.is-tall {
    align-items: center;
    color: #3d3d3d;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  ${breakpoint('md')`
    padding-right: 1rem;
  `}

  ${breakpoint('lg')`
    padding-right: 2rem;
  `}
`;

export default HeroHatContent;
