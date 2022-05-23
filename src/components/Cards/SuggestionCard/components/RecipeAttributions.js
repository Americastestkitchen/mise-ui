import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { fontSize, color } from '../../../../styles';

const RecipeAttributions = styled.div.attrs({
  className: 'suggestion-card__recipe-attributions',
})`

  max-width: 171px;
  color: ${color.eclipse};
  display: flex;
  justify-content: center;
  margin: auto;

  .action-summary {
    color: ${color.eclipse};
    font-size: ${fontSize.md};
  }

  .icon--star {
    margin-right: 1.6rem;
  }

  ${breakpoint('md')`
    justify-content: flex-start;
    margin: 0;
  `}
`;

export default RecipeAttributions;
