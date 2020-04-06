import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import CustomShowMoreResults from './index';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

const StyledShowMoreResults = styled(CustomShowMoreResults)`
  margin-bottom: 3rem;
`;

export const Default = ({ className }) => (
  <MiseInstantSearch>
    <StyledShowMoreResults
      className={className}
      resultsCount={40}
    />
  </MiseInstantSearch>
);

Default.propTypes = {
  className: PropTypes.string,
};

Default.defaultProps = {
  className: null,
};

export default {
  title: 'Components|ShowMoreResults',
  component: CustomShowMoreResults,
};
