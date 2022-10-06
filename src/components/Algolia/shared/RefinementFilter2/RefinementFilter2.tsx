import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Refinement, RefinementValue } from 'react-instantsearch-core';
import { Checkmark } from '../../../DesignTokens/Icon/svgs';
import { cssThemedColor, cssThemedFill, cssThemedHoverColor } from '../../../../styles/mixins';
import { color, font, fontSize, mixins, withThemes } from '../../../../styles';

const RefinementFilterWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  &:focus-within {
    box-shadow: none !important;
    ${mixins.focusIndicator()}
  }

  &:hover {
    cursor: pointer;

    .search-refinement-list__label {
      ${cssThemedHoverColor}
    }
  }
`;

const RefinementFilterLabel = styled.label.attrs({
  className: 'search-refinement-list__label',
})<{isRefined: boolean}>`
  font: ${fontSize.md}/1.38 ${font.pnr};
  ${({ isRefined }) => (isRefined ? `font: ${fontSize.md}/1.38 ${font.pnb};` : '')}

  ${cssThemedColor}

  &:hover {
    cursor: pointer;
    ${cssThemedHoverColor}
  }
`;

const RefinementFilterCountTheme = {
  default: css`
    font: ${fontSize.md}/1.38 ${font.pnr};
  `,
  dark: css`
    color: ${color.white};
  `,
};

const RefinementFilterCount = styled.span.attrs({
  className: 'refinement-filter__count',
})`
  ${cssThemedColor}
  ${withThemes(RefinementFilterCountTheme)}
`;

const RefinementFilterCheckTheme = {
  default: css`
    height: 1.2rem;
    left: -2rem;
    position: absolute;
    top: 1rem;
    width: 1.2rem;

    svg {
      left: 0;
      position: absolute;
      top: 0;
    }
  `,
  dark: css`
    svg {
      path {
        fill: ${color.white};
      }
    }
  `,
};

const RefinementFilterCheck = styled.div.attrs({
  className: 'refinement-filter__checkmark',
})`
  svg {
    path {
      ${cssThemedFill}
    }
  }
  
  ${withThemes(RefinementFilterCheckTheme)}
`;

const RefinementFilterCheckbox = styled.input`
  height: 0.8rem;
  left: -2rem;
  opacity: 0;
  position: absolute;
  width: 1.2rem;
`;

export type RefinementFilterProps = {
  attribute?: string;
  count?: number;
  currentRefinement?: string | string[];
  filterType?: string;
  includeCount?: boolean;
  isRefined?: boolean;
  label: string;
  refine: (x: string[]) => void;
  handleClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const RefinementFilter = ({
  attribute,
  count,
  currentRefinement,
  filterType = 'refinementList',
  handleClick,
  includeCount = true,
  isRefined = false,
  label,
  refine,
  value,
}: RefinementFilterProps) => {
  let isActuallyRefined = isRefined;
  if (filterType === 'toggleRefinement') {
    if (currentRefinement && typeof value === 'string') {
      isActuallyRefined = currentRefinement?.length > 0 && currentRefinement?.includes(value);
    }
  }

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isActuallyRefined && typeof handleClick === 'function') handleClick(e);
    if (filterType === 'refinementList') {
      refine([value]);
    } else if (filterType === 'toggleRefinement') {
      refine(isActuallyRefined ? [''] : [value]);
    }
  }, [isActuallyRefined, handleClick, filterType, refine, value]);

  const id = `${attribute}-${label}-filter`;

  return (
    <RefinementFilterWrapper
      className="refinement-filter__wrapper"
    >
      {isActuallyRefined && (
        <RefinementFilterCheck data-testid="refinement-filter__checkmark">
          <Checkmark />
        </RefinementFilterCheck>
      )}
      <RefinementFilterCheckbox
        checked={isActuallyRefined}
        onChange={onChange}
        id={id}
        type="checkbox"
      />
      <RefinementFilterLabel
        htmlFor={id}
        isRefined={isActuallyRefined}
      >
        {label}{includeCount && count && <RefinementFilterCount>{` (${count})`}</RefinementFilterCount>}
      </RefinementFilterLabel>
    </RefinementFilterWrapper>
  );
};

export default RefinementFilter;
