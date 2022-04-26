import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Checkmark } from '../../../DesignTokens/Icon/svgs';
import { cssThemedColor } from '../../../../styles/mixins';
import { color, font, fontSize, mixins, withThemes } from '../../../../styles';

const RefinementFilterWrapperTheme = {
  default: css`
    align-items: center;
    display: flex;
    position: relative;

    &:focus-within {
      box-shadow: none !important;
      ${mixins.focusIndicator()}
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
  cco: css`
    svg {
      path {
        fill: ${color.black};
      }
    }
  `,
  cio: css`
    svg {
      path {
        fill: ${color.cork};
      }
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
}) => {
  let isActuallyRefined = isRefined;
  if (filterType === 'toggleRefinement') {
    isActuallyRefined = currentRefinement.length > 0 && currentRefinement.includes(value);
  }

  /**
   * @type {(e: React.ChangeEvent<HTMLInputElement>) => void}
   */
  const onChange = useCallback((e) => {
    if (!isActuallyRefined && typeof handleClick === 'function') handleClick(e);
    if (filterType === 'refinementList') {
      refine(value);
    } else if (filterType === 'toggleRefinement') {
      if (isActuallyRefined) {
        refine(false);
      } else {
        refine(value);
      }
    }
  }, [isActuallyRefined, handleClick, filterType, refine, value]);

  const id = `${attribute}-${label}-filter`;

  return (
    <RefinementFilterWrapper
      className="refinement-filter__wrapper"
    >
      {
        isActuallyRefined ? (
          <RefinementFilterCheck data-testid="refinement-filter__checkmark">
            <Checkmark />
          </RefinementFilterCheck>
        ) : null
      }
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
        {label}{includeCount && count ? <RefinementFilterCount>{` (${count})`}</RefinementFilterCount> : null}
      </RefinementFilterLabel>

    </RefinementFilterWrapper>
  );
};

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
