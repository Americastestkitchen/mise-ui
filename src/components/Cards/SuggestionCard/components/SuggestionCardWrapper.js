import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { color } from '../../../../styles';

const SuggestionCardWrapper = styled.div.attrs({
  className: 'suggestion-card',
})`
  background: ${color.whiteSmoke};
  display: block;
  min-height: 30rem;

  ${breakpoint('md')`
    display: flex;
  `}
`;

export default SuggestionCardWrapper;
