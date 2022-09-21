import React from 'react';
import styled, { css } from 'styled-components';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { Refinement, RefinementValue } from 'react-instantsearch-core';

import { Close } from '../../../DesignTokens/Icon/svgs';
import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../../../styles';
import {
  cssThemedColor,
  cssThemedStroke,
  cssThemedHoverColor,
  cssThemedHoverStroke,
} from '../../../../styles/mixins';

const RefinementItemTheme = {
  default: css`
    display: flex;
    float: left;
    margin-bottom: ${spacing.xsm};
    margin-right: ${spacing.sm};

    /* We only want hover state when 'x' button is hovered. This style tells
    Refinement wrapper to ignore mouse event. */
    pointer-events: none;

    /* Trigger mouse event in Refinment only if direct 'x' button child is hovered. */
    & > button {
      pointer-events: auto;
    }
  `,
  kidsSearch: css`
    background-color: ${color.greySmoke};
    border-radius: 1rem;
    color: ${color.black};
    padding: 0.3rem 1rem 0.4rem;

    /* Change color of p child to mint when hovered. */
    &:hover > p {
      color: ${color.jade}
    }

    /* Change svg stroke color when parent and 'x' button child are hovered. */
    &:hover > button:hover {
      svg g {
        stroke: ${color.jade};
      }
    }
  `,
};

const RefinementItem = styled.div`
  &:hover > p {
    ${cssThemedHoverColor}
  }

  &:hover > button:hover {
    svg g {
      ${cssThemedHoverStroke}
    }
  }

  ${withThemes(RefinementItemTheme)}
`;

const RefinementLabelTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
    margin-right: ${spacing.xsm};
  `,
  kidsSearch: css`
    color: ${color.black};

    &::first-letter {
      text-transform: capitalize;
    }
  `,
};

const RefinementLabel = styled.p`
  ${cssThemedColor}

  ${withThemes(RefinementLabelTheme)}
`;

const RefinementClearButtonTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
    width: 0.8rem;

    svg {
      height: 0.8rem;
    }
  `,
  kidsSearch: css`
    svg g {
      stroke: ${color.black};
    }
  `,
};

const RefinementClearButton = styled.button`
  svg g {
    ${cssThemedStroke}
  }

  ${withThemes(RefinementClearButtonTheme)}
`;

const labelMap: Record<string, any> = {
  atk: 'America\'s Test Kitchen',
  cco: 'Cook\'s Country',
  cio: 'Cook\'s Illustrated',
  kids: 'ATK Kids',
  school: 'Cooking School',
  shop: 'ATK Shop',
};

export type CustomCurrentRefinementProps = {
  handleClick?: (label: string) => void;
  items: Refinement[];
  refine: ((refinement: RefinementValue | RefinementValue[] | Refinement[]) => void);
}

// NOTE: when `category.items` is undefined, that means the underlying
// facet only allows one value at a time. Exampel is NumericInput
export const CustomCurrentRefinements = ({
  handleClick,
  items,
  refine,
}: CustomCurrentRefinementProps) => (
  <>
    {
      items.map((category) => {
        const items = category.items || [{ ...category, label: category.currentRefinement }];
        return (
          items.map(({ label, value }) => (
            <RefinementItem
              className="current-refinement-item"
              key={`clear-refinement--${label}`}
            >
              <RefinementLabel>
                {labelMap[label] || label}
              </RefinementLabel>
              <RefinementClearButton
                onClick={(e) => {
                  e.preventDefault();
                  refine(value);
                  if (handleClick) handleClick(label);
                }}
              >
                <Close
                  ariaLabel={`Remove ${label} refinement`}
                  fill={color.nobel}
                />
              </RefinementClearButton>
            </RefinementItem>
          ))
        );
      })
    }
  </>
);

export default connectCurrentRefinements(CustomCurrentRefinements);
