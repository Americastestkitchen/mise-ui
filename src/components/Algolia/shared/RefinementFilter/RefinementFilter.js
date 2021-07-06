import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Badge from '../../../Badge';
import { Checkmark } from '../../../DesignTokens/Icon/svgs';
import { color, font, fontSize, mixins, spacing, withThemes } from '../../../../styles';

const RefinementFilterLabelTheme = {
  default: css`
    align-items: center;
    border: 1px dashed transparent;
    color: ${color.eclipse};
    display: flex;
    font: ${fontSize.md}/1.38 ${font.pnr};
    padding: ${spacing.xxsm} 0.25rem ${spacing.xxsm} 2.5rem;
    left: -2.5rem;
    position: relative;

    &.search_site_list {
      padding: ${spacing.xsm} 0.25rem ${spacing.xsm} 2.5rem;
    }

    .search-refinement-list__label-text {
      ${({ isRefined }) => (isRefined ? `color: ${color.mint}; font-family: ${font.pnb};` : '')}
    }

    &:hover {
      cursor: pointer;

      .search-refinement-list__label-text {
        color: ${color.mint};
      }

      svg {
        circle {
          ${({ altFill }) => (altFill ? `fill: ${altFill};` : '')}
        }
      }
    }

    &:focus-within {
      ${mixins.focusIndicator()};
      outline-offset: 0;
    }

    .search-refinement__badge {
      margin-right: 0.8rem;
    }
  `,
  kidsSearch: css`
    background-color: ${color.greySmoke};
    border: 2px solid transparent;
    border-radius: 1rem;
    color: ${color.black};
    left: 0;
    line-height: 1.37;
    margin-bottom: 1.2rem;
    padding: 0.4rem 1.3rem;

    .search-refinement-list__label-text {
      display: block;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    .refinement-filter__checkmark,
    .refinement-filter__count {
      display: none;
    }

    &:hover {
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

      .search-refinement-list__label-text {
        color: ${color.black};
      }
    }

    ${({ isRefined }) => (isRefined ? `
      background-color: ${color.jade};

      .search-refinement-list__label-text {
        color: ${color.white};
      }

      &:hover {
        .search-refinement-list__label-text {
          color: ${color.white};
        }
      }
    ` : '')}

    &:focus-within {
      border: 2px solid ${color.jade};
    }
  `,
  dark: css`
    color: ${color.white};
    ${({ isRefined }) => (isRefined ? `font-family: ${font.pnb};` : '')}

    .search-refinement-list__label-text {
      ${({ isRefined }) => (isRefined ? `color: ${color.white};` : '')}
    }

    &:hover {
      ${({ isRefined }) => (isRefined ? `color: ${color.white};` : `color: ${color.silver};`)}

      .search-refinement-list__label-text {
        ${({ isRefined }) => (isRefined ? `color: ${color.white};` : `color: ${color.silver};`)}
      }

      .refinement-filter__count {
        ${({ isRefined }) => (isRefined ? `color: ${color.white};` : `color: ${color.silver};`)}
      }
    }
  `,
  cio: css``,
};

const RefinementFilterLabel = styled.label.attrs({
  className: 'search-refinement-list__label',
})`${withThemes(RefinementFilterLabelTheme)}`;

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

const RefinementFilterCountTheme = {
  default: css`
    color: ${color.nobel};
  `,
  dark: css`
    color: ${color.white};
  `,
};

const RefinementFilterCount = styled.span.attrs({
  className: 'refinement-filter__count',
})`${withThemes(RefinementFilterCountTheme)}`;

const RefinementFilter = ({
  altFill,
  attribute,
  count,
  currentRefinement,
  filterType,
  includeCount,
  isRefined,
  label,
  refine,
  handleClick,
  value,
}) => (
  <>
    <RefinementFilterLabel
      altFill={altFill}
      className={`${attribute}`}
      data-site-key={value}
      htmlFor={`${attribute}--${label}`}
      isRefined={isRefined || (currentRefinement && currentRefinement.length > 0)}
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
      <RefinementFilterCheckbox
        id={`search-site-list--${value}`}
        type="checkbox"
        defaultChecked={isRefined}
      />
      {
        attribute === 'search_site_list' ? (
          <Badge
            className="search-refinement__badge"
            fill={isRefined ? altFill : color.eclipse}
            type={value}
          />
        ) : null
      }
      {
        includeCount ? (
          <span className="search-refinement-filter__count">
            <span className="search-refinement-list__label-text">
              {label}
            </span>
            <RefinementFilterCount data-testid="refinement-filter__count">
              {` (${count})`}
            </RefinementFilterCount>
          </span>
        ) : (
          <span className="search-refinement-list__label-text">
            {label}
          </span>
        )
      }
    </RefinementFilterLabel>
  </>
);

RefinementFilter.propTypes = {
  altFill: PropTypes.string,
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
  altFill: null,
  count: null,
  currentRefinement: null,
  filterType: 'refinementList',
  includeCount: true,
  isRefined: null,
  handleClick: null,
};

export default RefinementFilter;
