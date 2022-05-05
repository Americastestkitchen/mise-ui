import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { color } from '../../../../styles';

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
      letter-spacing: 0.6px;
      color: ${color.eclipse};
      text-transform: uppercase;
    }
  }

  ${breakpoint('md')`
    bottom: -7rem;
  `}
`;

export default SuggestionCardActions;
