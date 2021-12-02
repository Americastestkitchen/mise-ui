import styled from 'styled-components';

import { spacing, mixins } from '../../../../styles';

const SuggestionCardDek = styled.div.attrs({
  className: 'suggestion-card__dek',
})`
  margin-bottom: ${spacing.sm};
  max-height: 60px;
  overflow: hidden;
  ${mixins.truncateLineClamp(3)};
`;

export default SuggestionCardDek;
