import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { connectStats } from 'react-instantsearch-dom';

import { color, font, fontSize } from '../../styles';

const StatsWrapper = styled.p`
  color: ${color.eclipse};
  font: ${fontSize.md}/1 ${font.pnb};
`;

const Stats = ({ nbHits }) => (
  <StatsWrapper>
    {`${nbHits.toLocaleString()} Result${nbHits !== 1 ? 's' : ''}`}
  </StatsWrapper>
);

Stats.propTypes = {
  nbHits: PropTypes.number.isRequired,
};

const CustomStats = connectStats(Stats);

export default () => <CustomStats />;
