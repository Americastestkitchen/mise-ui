import React from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import styled from 'styled-components';

import LabelFrame from '../../../components/LabelFrame/LabelFrame';

const searchClient = algoliasearch(
  'Y1FNZXUI30',
  '3ef655917b64bb548c4bf36e9dab9913',
);

const HitsWrapper = styled.div`
  .ais-Hits-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  .ais-Hits-item {
    max-width: calc(20% - 1.2rem);
  }
`;

const HitWrapper = styled.div`
  margin-bottom: 2rem;
`;

const HitTitle = styled.p`
`;

const HitImage = styled.img`
  display: block;
`;

const Hit = ({
  hit: {
    title,
    search_cloudinary_id: cloudinaryId,
  },
}) => (
  <HitWrapper>
    <HitTitle>
      {title}
    </HitTitle>
    {
      cloudinaryId ? (
        <HitImage
          src={`https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,q_auto,w_268,h_268/${cloudinaryId}`}
        />
      ) : null
    }
  </HitWrapper>
);

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

const MiseInstantSearch = ({ children }) => (
  <InstantSearch
    indexName="everest_search_development"
    searchClient={searchClient}
  >
    {children}
    <LabelFrame label="Results">
      <HitsWrapper>
        <Hits hitComponent={Hit} />
      </HitsWrapper>
    </LabelFrame>
  </InstantSearch>
);

MiseInstantSearch.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MiseInstantSearch;
