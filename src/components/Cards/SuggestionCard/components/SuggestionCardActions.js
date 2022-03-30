import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { font, fontSize, color } from '../../../../styles';

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
      font-size: ${fontSize.xsm};
      color: ${color.eclipse};
      font-family: ${font.pnr};
      text-transform: uppercase;
    }
  }

  @media (min-width: 0) and (max-width: 413px) {
    // flex-direction: column;
  }

  ${breakpoint('md')`
    bottom: -7rem;
  `}
`;

export default SuggestionCardActions;
