import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connectCurrentRefinements } from 'react-instantsearch-dom';

import { Close } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize, lineHeight, spacing } from '../../styles';

const Refinement = styled.div`
  display: flex;
  float: left;
  margin-bottom: ${spacing.xsm};
  margin-right: ${spacing.sm};

  // We only want hover state when 'x' button is hovered. This style tells
  // Refinement wrapper to ignore mouse event.
  pointer-events: none;

  // Trigger mouse event in Refinment only if direct 'x' button child is hovered.
  & > button {
    pointer-events: auto;
  }

  // Change color of p child to mint when hovered.
  &:hover > p {
    color: ${color.mint}
  }

  // Change svg stroke color when parent and 'x' button child are hovered.
  &:hover > button:hover {
    svg {
      g {
        stroke: ${color.mint};
      }
    }
  }
`;

const RefinementLabel = styled.p`
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
  color: ${color.eclipse};
  margin-right: ${spacing.xsm};
`;

const RefinementClearButton = styled.button`
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
  color: ${color.nobel};
  height: 0.8rem;
  width: 0.8rem;
`;

const labelMap = {
  atk: 'America\'s Test Kitchen',
  cco: 'Cook\'s Country',
  cio: 'Cook\'s Illustrated',
  kids: 'ATK Kids',
  school: 'Cooking School',
  shop: 'ATK Shop',
};

const CurrentRefinements = ({ handleClick, items, refine }) => (
  <>
    {
      items.map(category => (
        category.items.map(({ label, value }) => (
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
      ))
    }
  </>
);

CurrentRefinements.propTypes = {
  handleClick: PropTypes.func,
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

CurrentRefinements.defaultProps = {
  handleClick: null,
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

const SearchCurrentRefinements = ({ handleClick, transformItems }) => (
  <CustomCurrentRefinements
    handleClick={handleClick}
    transformItems={transformItems}
  />
);

SearchCurrentRefinements.propTypes = {
  handleClick: PropTypes.func,
  transformItems: PropTypes.func,
};

SearchCurrentRefinements.defaultProps = {
  handleClick: null,
  transformItems: null,
};

export default SearchCurrentRefinements;
