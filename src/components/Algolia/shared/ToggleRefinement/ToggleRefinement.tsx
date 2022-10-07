import React from 'react';
import styled from 'styled-components';
import { connectRefinementList } from 'react-instantsearch-dom';
import { RefinementListProvided } from 'react-instantsearch-core';
import RefinementFilter2 from '../RefinementFilter2/RefinementFilter2';
import { cssThemedColor, cssThemedLink } from '../../../../styles/mixins';
import { font, fontSize } from '../../../../styles';

const ToggleRefinementWrapper = styled.div`
  width: fit-content;

  .refinement-filter__wrapper {
    label {
      ${cssThemedColor}
      ${cssThemedLink}
      font: ${fontSize.md}/1.05 ${font.pnb};
    }

    &:hover {
      label {
        ${cssThemedColor}
      }
    }
  }
  
  .refinement-filter__checkmark {
    top: 0.4rem;
  }
`;

export interface ToggleRefinementProps extends RefinementListProvided {
  attribute: string;
  handleClick: () => void;
  label: string;
  value: string;
}

const ToggleRefinement = ({
  attribute,
  label,
  value,
  ...restProps
}: ToggleRefinementProps) => (
  <ToggleRefinementWrapper className="toggle-refinement">
    <RefinementFilter2
      attribute={attribute}
      filterType="toggleRefinement"
      includeCount={false}
      label={label}
      value={value}
      {...restProps}
    />
  </ToggleRefinementWrapper>
);

export default connectRefinementList(ToggleRefinement);
