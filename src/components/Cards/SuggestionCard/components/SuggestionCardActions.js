import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { font, color } from '../../../../styles';

const SuggestionCardActions = styled.div.attrs({
  className: 'suggestion-card__buttons',
})`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: -26.5rem;

  .button-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-right: 1rem;

    span {
      font-size: 1.2rem;
      color: ${color.eclipse};
      font-family: ${font.pnb};
      text-transform: uppercase;
    }
  }

  ${breakpoint('md')`
    bottom: -7rem;
  `}
`;

export default SuggestionCardActions;
