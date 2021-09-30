import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color } from '../../../styles';

const HeroHatContent = styled.div.attrs({
  className: 'hero-hat__content',
})`
  color: ${color.eclipse};
  flex: 1 0 0;
  max-width: 25rem;

  ${breakpoint('md')`
    max-width: 32.5rem;
    padding-right: 2rem;
  `}
`;

export default HeroHatContent;
