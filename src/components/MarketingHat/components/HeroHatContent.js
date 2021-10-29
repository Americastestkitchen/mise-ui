import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color } from '../../../styles';

const HeroHatContent = styled.div.attrs({
  className: 'hero-hat__content',
})`
  color: ${color.eclipse};
  flex: 1 0 0;

  ${breakpoint('md')`
    max-width: 35.5rem;
    padding-right: 2rem;
  `}

  ${breakpoint('lg')`
    max-width: calc(100% - 20rem);
  `}

  ${breakpoint('xlg')`
    max-width: calc(100% - 42rem);
  `}
`;

export default HeroHatContent;
