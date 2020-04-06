import React from 'react';
import { ClearRefinements } from 'react-instantsearch-dom';
import styled from 'styled-components';

import { color, font, fontSize } from '../../styles';

const StyledClearRefinements = styled(ClearRefinements)`
  button {
    color: ${color.eclipse};
    font: ${fontSize.md}/1 ${font.pnr};

    &:hover {
      color: ${color.mint};
      cursor: pointer;
    }
  }
`;

export default () => (
  <StyledClearRefinements
    translations={{
      reset: 'Clear filters',
    }}
  />
);
