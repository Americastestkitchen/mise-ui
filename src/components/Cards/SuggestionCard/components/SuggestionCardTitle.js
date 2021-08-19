import styled from 'styled-components';

import { font, fontSize, lineHeight, spacing } from '../../../../styles';

const SuggestionCardTitle = styled.a.attrs({
  className: 'suggestion-card__title',
})`
  font: 700 ${fontSize.md}/${lineHeight.md} ${font.msr};
  margin-bottom: ${spacing.xsm};
  color: red;
`;

export default SuggestionCardTitle;
