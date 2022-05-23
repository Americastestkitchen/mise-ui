import styled from 'styled-components';

import { mixins } from '../../../../styles';

const SuggestionCardSubTitle = styled.span.attrs({
  className: 'suggestion-card__sub-title',
})`
  display: block;
  font-style: italic;
  margin-bottom: 1rem;
  ${mixins.truncateLineClamp(1)}
`;

export default SuggestionCardSubTitle;
