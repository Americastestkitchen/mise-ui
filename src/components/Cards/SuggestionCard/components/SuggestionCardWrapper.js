import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { color } from '../../../../styles';

const SuggestionCardWrapper = styled.div.attrs({
  className: 'suggestion-card',
})`
  background: ${color.whiteSmoke};
  display: block;
  min-height: 47.5rem;

  ${breakpoint('md')`
    display: flex;
    max-height: 27.2rem;
    min-height: 27.2rem;
  `}
`;

export default SuggestionCardWrapper;
