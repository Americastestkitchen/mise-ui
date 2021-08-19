import styled from 'styled-components';

import { spacing } from '../../../../styles';

const SuggestionCardSubTitle = styled.span.attrs({
  className: 'suggestion-card__sub-title',
})`
  display: block;
  font-style: italic;
  margin-bottom: ${spacing.xsm};
`;

export default SuggestionCardSubTitle;
