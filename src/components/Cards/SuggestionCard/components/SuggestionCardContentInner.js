import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import { spacing } from '../../../../styles';

const SuggestionCardContentInner = styled.div.attrs({
  className: 'suggestion-card__content-inner',
})`
  padding: ${spacing.sm};

  ${breakpoint('lg')`
    width: calc(100% - 4.2rem);
  `}
`;

export default SuggestionCardContentInner;
