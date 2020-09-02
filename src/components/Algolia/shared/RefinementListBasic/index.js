import React from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch-dom';
import styled, { css } from 'styled-components';

import { ChefHat, Content, Cookbook, Knife, Sort, Time } from '../../../DesignTokens/Icon/svgs';
import RefinementFilter from '../RefinementFilter/RefinementFilter';
import { color, font, fontSize, spacing, withThemes } from '../../../../styles';

const RefinementListRefinements = styled.div`
  border: none;
  margin: 0;
  padding: 0;
`;

const RefinementListFieldsetTheme = {
  default: css``,
  kidsSearch: css`
    > div {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    legend {
      margin-right: 2rem;
      white-space: nowrap;
    }

    label {
      margin: 0 1rem 0;
      white-space: nowrap;
    }

    svg {
      vertical-align: middle;
    }
  `,
};

const RefinementListFieldset = styled.fieldset`
  ${withThemes(RefinementListFieldsetTheme)}
`;

const RefinementListLegendTheme = {
  default: css`
    padding: 0 ${spacing.xxsm};

    @media(hover: hover) {
      &:hover {
        cursor: pointer;
      }
    }

    &.with-icon {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
      }
    }
  `,
  kidsSearch: css`
    cursor: text !important;
    font: 2rem/1 ${font.cwf};
    letter-spacing: 2.5px;
    text-transform: lowercase;

    svg {
      height: 2rem;
      min-width: 2.3rem;
    }
  `,
  dark: css`
    color: ${color.white};
    font: ${fontSize.md}/1 ${font.pnb};
    padding: 0 0 ${spacing.sm};
  `,
};

const RefinementListLegend = styled.legend`
  ${withThemes(RefinementListLegendTheme)}
`;

const labelRe = /[-_]/g;
const icons = {
  chefHat: ChefHat,
  content: Content,
  cookbook: Cookbook,
  knife: Knife,
  sort: Sort,
  time: Time,
};

export const CustomBasicRefinementList = ({
  attribute,
  icon,
  includeCount,
  items,
  label,
  refine,
  handleClick,
}) => {
  const Icon = icon ? icons[icon] : null;
  return items.length > 0 && (
    <RefinementListRefinements>
      <RefinementListFieldset>
        <div>
          <RefinementListLegend
            className={Icon ? 'with-icon' : null}
          >
            {icons[icon] ? <Icon /> : null}
            {label || attribute.replace(labelRe, ' ')}
          </RefinementListLegend>
          {
            items.map(item => (
              <RefinementFilter
                {...item}
                attribute={attribute}
                includeCount={includeCount}
                key={`${attribute}-${item.label}`}
                handleClick={handleClick}
                refine={refine}
              />
            ))
          }
        </div>
      </RefinementListFieldset>
    </RefinementListRefinements>
  );
};

CustomBasicRefinementList.propTypes = {
  attribute: PropTypes.string.isRequired,
  currentRefinement: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
  icon: PropTypes.string,
  includeCount: PropTypes.bool,
  items: PropTypes.array,
  label: PropTypes.string,
  refine: PropTypes.func.isRequired,
};

CustomBasicRefinementList.defaultProps = {
  handleClick: null,
  icon: null,
  includeCount: true,
  items: null,
  label: null,
};

const AlgoliaRefinementList = connectRefinementList(CustomBasicRefinementList);

const RefinementListBasic = ({ attribute, items, ...restProps }) => (
  attribute !== ''
    ? (
      <AlgoliaRefinementList
        attribute={attribute}
        items={items}
        {...restProps}
      />
    )
    : (
      <CustomBasicRefinementList
        attribute={attribute}
        currentRefinement={[]}
        items={items}
        includeCount={false}
        {...restProps}
      />
    )
);

RefinementListBasic.propTypes = {
  /** Algolia attribute that is used to pull refinement values. */
  attribute: PropTypes.string,
  /** Algolia attribute, list of refinement values. */
  items: PropTypes.array,
  /** Used to pass click functionality from jarvis etc. */
  handleClick: PropTypes.func,
  /** Unique id string for svg icon to render next to label */
  icon: PropTypes.string,
  /** Legend text for the fieldset */
  label: PropTypes.string,
  /** Initial number of refinement filters that are visible in the refinement list. */
  transformItems: PropTypes.func,
  /** Call this with the value of a filter to refine results based on filter. */
  refine: PropTypes.func.isRequired,
};

RefinementListBasic.defaultProps = {
  attribute: '',
  handleClick: null,
  icon: null,
  items: null,
  label: null,
  transformItems: null,
};

export default RefinementListBasic;
