import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Checkmark } from '../../../DesignTokens/Icon/svgs';
import { color, font, fontSize, spacing, withThemes } from '../../../../styles';

const RefinementFilterWrapperTheme = {
  default: css`
    align-items: center;
    display: flex;

    &:focus-within {
      box-shadow: 0 0 0 2px ${color.focusRing};
    }

    &:hover {
      cursor: pointer;
    }
  `,
  atk: css`
    &:hover {
      .search-refinement-list__label {
        color: ${color.mint};
      }
    }
  `,
  cco: css`
    &:hover {
      .search-refinement-list__label {
        color: ${color.denim};
      }
    }
  `,
  cio: css`
    &:hover {
      .search-refinement-list__label {
        color: ${color.squirrel};
      }
    }
  `,
};

const RefinementFilterWrapper = styled.div`
  ${withThemes(RefinementFilterWrapperTheme)}
`;

const RefinementFilterLabelTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/1.38 ${font.pnr};
    ${({ isRefined }) => (isRefined ? `font: ${fontSize.md}/1.38 ${font.pnb};` : '')}
  `,
  atk: css`
    &:hover {
      color: ${color.mint};
      cursor: pointer;
    }
  `,
  cco: css`
    color: ${color.black};

    &:hover {
      color: ${color.denim};
      cursor: pointer;
    }
  `,
  cio: css`
    color: ${color.cork};

    &:hover {
      color: ${color.squirrel};
      cursor: pointer;
    }
  `,
};

const RefinementFilterLabel = styled.label.attrs({
  className: 'search-refinement-list__label',
})`${withThemes(RefinementFilterLabelTheme)}`;

const RefinementFilterCountTheme = {
  default: css`
    color: ${color.nobel};
    font: ${fontSize.md}/1.38 ${font.pnr};
  `,
  dark: css`
    color: ${color.white};
  `,
};

const RefinementFilterCount = styled.span.attrs({
  className: 'refinement-filter__count',
})`${withThemes(RefinementFilterCountTheme)}`;

const RefinementFilterCheckTheme = {
  default: css`
    height: 1.2rem;
    margin-left: -2rem;
    margin-right: ${spacing.xsm};
    position: relative;
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
})`${withThemes(RefinementFilterCheckTheme)}`;

const RefinementFilterCheckbox = styled.input`
  height: 0.8rem;
  left: -2rem;
  position: absolute;
  opacity: 0;
  width: 1.2rem;
`;

const RefinementFilter = ({
  attribute,
  count,
  currentRefinement,
  filterType,
  handleClick,
  includeCount,
  isRefined,
  label,
  refine,
  value,
}) => (
  <RefinementFilterWrapper
    className="refinement-filter__wrapper"
    onClick={(e) => {
      e.preventDefault();
      if (!isRefined && typeof handleClick === 'function') handleClick(e);
      if (filterType === 'refinementList') {
        refine(value);
      } else if (filterType === 'toggleRefinement') {
        if (currentRefinement.length > 0) {
          refine(false);
        } else {
          refine(value);
        }
      }
    }}
  >
    {
      isRefined || (filterType === 'toggleRefinement' && currentRefinement.length > 0) ? (
        <RefinementFilterCheck data-testid="refinement-filter__checkmark">
          <Checkmark />
        </RefinementFilterCheck>
      ) : null
    }
    <RefinementFilterCheckbox defaultChecked={isRefined} id={`${attribute}-${value}-filter`} type="checkbox" />
    <RefinementFilterLabel
      htmlFor={`${attribute}-${value}-filter`}
      isRefined={isRefined}
    >
      {label}{includeCount && count ? <RefinementFilterCount>{` (${count})`}</RefinementFilterCount> : null}
    </RefinementFilterLabel>
  </RefinementFilterWrapper>
);

RefinementFilter.propTypes = {
  /** Algolia attribute used to filter results. */
  attribute: PropTypes.string,
  /** Number of hits for this filter value. */
  count: PropTypes.number,
  currentRefinement: PropTypes.bool,
  filterType: PropTypes.string,
  includeCount: PropTypes.bool,
  /** Is this filter selected? */
  isRefined: PropTypes.bool,
  /** Filter label */
  label: PropTypes.string.isRequired,
  /** Call this with the value of a filter to refine results based on filter. */
  refine: PropTypes.func.isRequired,
  /** Used to pass click functionality from jarvis etc. */
  handleClick: PropTypes.func,
  /** Value of filter to be used for refining results. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array], PropTypes.string).isRequired,
};

RefinementFilter.defaultProps = {
  attribute: '',
  count: null,
  currentRefinement: null,
  filterType: 'refinementList',
  includeCount: true,
  isRefined: null,
  handleClick: null,
};

export default RefinementFilter;
