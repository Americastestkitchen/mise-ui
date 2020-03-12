import React from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import styled from 'styled-components';

const searchClient = algoliasearch(
  'Y1FNZXUI30',
  '3ef655917b64bb548c4bf36e9dab9913',
);

const HitsWrapper = styled.div`
  .ais-Hits-list {
    border-top: solid 1px black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3rem 0 0;
    margin: 3rem 0 0;
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

const Hit = ({ hit, hit: { title, search_cloudinary_id } }) => {
  return (
  <HitWrapper>
    <HitTitle>
      {title}
    </HitTitle>
    {
      search_cloudinary_id ? (
        <HitImage
          src={`https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_auto,f_auto,fl_lossy,q_auto,w_268,h_268/${search_cloudinary_id}`}
        />
      ) : null
    }
  </HitWrapper>
  );
};

const MiseInstantSearch = ({ children }) => (
  <InstantSearch
    indexName="everest_search_development"
    searchClient={searchClient}
  >
    {children}
    <HitsWrapper>
      <Hits hitComponent={Hit} />
    </HitsWrapper>
  </InstantSearch>
);

MiseInstantSearch.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MiseInstantSearch;
