import React from 'react';
import styled, { css } from 'styled-components';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { Refinement, RefinementValue } from 'react-instantsearch-core';

import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../../../styles';
import { cssThemedFill, cssThemedHoverColor } from '../../../../styles/mixins';

const StyledClearRefinementsTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
    margin-bottom: ${spacing.xsm};

    &[disabled] {
      display: none;
    }
  `,
  kidsSearch: css`
    background-color: ${color.greySmoke};
    border-radius: 1rem;
    color: ${color.black};
    float: left;
    padding: 0.3rem 1rem 0.4rem;

    &:hover {
      color: ${color.jade};
    }
  `,
};

const StyledClearRefinements = styled.button`
  ${cssThemedFill}

  @media(hover: hover) {
    &:hover {
      ${cssThemedHoverColor}
      cursor: pointer;
    }
  }

  ${withThemes(StyledClearRefinementsTheme)}
`;

export type CustomClearRefinementsProps = {
  handleClick?: () => void;
  items: Refinement[];
  refine: ((refinement: RefinementValue | RefinementValue[] | Refinement[]) => void);
}

export const CustomClearRefinements = ({
  handleClick,
  items,
  refine,
}: CustomClearRefinementsProps) => (
  <StyledClearRefinements
    className="clear-refinements-button"
    disabled={!items.length}
    onClick={() => {
      if (items) {
        refine(items);
      }
      if (handleClick) handleClick();
    }}
    type="button"
  >
    Clear filters
  </StyledClearRefinements>
);

export default connectCurrentRefinements(CustomClearRefinements);
