import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { color, font } from '../../../../styles';

const SuggestionCardActions = styled.div.attrs({
  className: 'suggestion-card__buttons',
})`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: -35.5rem;

  .button-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-right: 1rem;

    span {
      letter-spacing: 0.6px;
      color: ${color.eclipse};
      text-transform: uppercase;
      font: 1rem/2.6rem ${font.pnr};
    }
  }

  ${breakpoint('md')`
    bottom: -9rem;
  `}
`;

export default SuggestionCardActions;
