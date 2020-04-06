import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connectCurrentRefinements } from 'react-instantsearch-dom';

import { Close } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize } from '../../styles';

const RefinementsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1.2rem 0 1rem 0;
  margin: 0;
`;

const RefinementListItem = styled.li`
  margin-bottom: 0.5rem;
  margin-right: 1.6rem;
`;

const Refinement = styled.div`
  display: flex;
`;

const RefinementLabel = styled.p`
  font: ${fontSize.md}/1 ${font.pnr};
  color: ${color.eclipse};
  margin-right: 0.8rem;
`;

const RefinementClearButton = styled.button`
  font: ${fontSize.md}/1 ${font.pnr};
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

const CurrentRefinements = ({ items, refine }) => (
  <RefinementsList>
    {
      items.map(category => (
        category.items.map(({ label, value }) => (
          <RefinementListItem key={`clear-refinement--${label}`}>
            <Refinement>
              <RefinementLabel>
                {labelMap[label] || label}
              </RefinementLabel>
              <RefinementClearButton onClick={(e) => { e.preventDefault(); refine(value); }}>
                <Close fill={color.nobel} />
              </RefinementClearButton>
            </Refinement>
          </RefinementListItem>
        ))
      ))
    }
  </RefinementsList>
);

CurrentRefinements.propTypes = {
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

export default () => <CustomCurrentRefinements />;
