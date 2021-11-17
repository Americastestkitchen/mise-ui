import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { font, fontSize } from '../../../../styles';

const SuggestionCardContent = styled.div.attrs({
  className: 'suggestion-card__content',
})`
  flex: 1 0 0;
  font: ${fontSize.sm}/1.43 ${font.mwr};

  ${breakpoint('lg')`
    align-self: center;
  `}
`;

export default SuggestionCardContent;
