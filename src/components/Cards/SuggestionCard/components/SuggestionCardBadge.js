import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

import Badge from '../../../Badge';
import { spacing } from '../../../../styles';

const SuggestionCardBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};

  .no-image & {
    position: relative;
    top: 0;
    left: 0;
  }

  ${breakpoint('xs', 'md')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

export default SuggestionCardBadge;
