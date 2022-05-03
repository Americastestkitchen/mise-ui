import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { font, fontSize, lineHeight, color, mixins } from '../../../../styles';

const SuggestionCardTitle = styled.a.attrs({
  className: 'suggestion-card__title',
})`
  color: ${color.eclipse};
  font-family: ${font.pnb};
  font-size: ${fontSize.lg};
  line-height: ${lineHeight.md};
  margin: 1rem 0;
  ${mixins.truncateLineClamp(2)};

  ${breakpoint('md')`
    font-size: ${fontSize.xl};
  `}

  &:hover {
    color: ${color.grayishCyan};
  }
`;

export default SuggestionCardTitle;
