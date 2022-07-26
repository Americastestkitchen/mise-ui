import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { connectCurrentRefinements } from 'react-instantsearch-dom';

import { Close } from '../../../DesignTokens/Icon/svgs';
import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../../../styles';

const RefinementTheme = {
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
  atk: css`
    /* Change color of p child to mint when hovered. */
    &:hover > p {
      color: ${color.mint}
    }

    /* Change svg stroke color when parent and 'x' button child are hovered. */
    &:hover > button:hover {
      svg g {
        stroke: ${color.mint};
      }
    }
  `,
  cco: css`
    /* Change color of p child to mint when hovered. */
    &:hover > p {
      color: ${color.denim}
    }

    /* Change svg stroke color when parent and 'x' button child are hovered. */
    &:hover > button:hover {
      svg g {
        stroke: ${color.denim};
      }
    }
  `,
  cio: css`
    /* Change color of p child to mint when hovered. */
    &:hover > p {
      color: ${color.squirrel}
    }

    /* Change svg stroke color when parent and 'x' button child are hovered. */
    &:hover > button:hover {
      svg g {
        stroke: ${color.squirrel};
      }
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

const Refinement = styled.div`
  ${withThemes(RefinementTheme)}
`;

const RefinementLabelTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
    margin-right: ${spacing.xsm};
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
  kidsSearch: css`
    color: ${color.black};

    &::first-letter {
      text-transform: capitalize;
    }
  `,

};

const RefinementLabel = styled.p`
  ${withThemes(RefinementLabelTheme)}
`;

const RefinementClearButtonTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
    width: 0.8rem;

    svg {
      height: 0.8rem;
      vertical-align: top;
      margin-top: 5px;
    }
  `,
  atk: css`
    svg g {
      stroke: ${color.eclipse};
    }
  `,
  cco: css`
    svg g {
      stroke: ${color.black};
    }
  `,
  cio: css`
    svg g {
      stroke: ${color.cork};
    }
  `,
  kidsSearch: css`
    svg g {
      stroke: ${color.black};
    }
  `,
};

const RefinementClearButton = styled.button`
  ${withThemes(RefinementClearButtonTheme)}
`;

const labelMap = {
  atk: 'America\'s Test Kitchen',
  cco: 'Cook\'s Country',
  cio: 'Cook\'s Illustrated',
  kids: 'ATK Kids',
  school: 'Cooking School',
  shop: 'ATK Shop',
};

// NOTE: when `category.items` is undefined, that means the underlying
// facet only allows one value at a time. Exampel is NumericInput
export const CustomCurrentRefinements = ({ handleClick, items, refine }) => (
  <>
    {
      items.map((category) => {
        const items = category.items || [{ ...category, label: category.currentRefinement }];
        return (
          items.map(({ label, value }) => (
            <Refinement
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
            </Refinement>
          ))
        );
      })
    }
  </>
);

CustomCurrentRefinements.propTypes = {
  handleClick: PropTypes.func,
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

CustomCurrentRefinements.defaultProps = {
  handleClick: null,
};

export default connectCurrentRefinements(CustomCurrentRefinements);
