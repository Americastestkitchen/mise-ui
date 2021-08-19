import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { font, fontSize } from '../../../../styles';

const SuggestionCardActions = styled.div.attrs({
  className: 'suggestion-card__buttons',
})`
  display: flex;

  button {
    font: 700 ${fontSize.sm}/1.64 ${font.msr};
    white-space: nowrap;
  }

  @media (min-width: 0) and (max-width: 413px) {
    flex-direction: column;

    button {
      width: 100%;
      
      &:first-child {
        margin-bottom: 0.8rem;
      }
    }
  }

  ${breakpoint('md', 'xlg')`
    flex-direction: column;

    button {
      width: 100%;
      
      &:first-child {
        margin-bottom: 0.8rem;
      }
    }
  `}
`;

export default SuggestionCardActions;
