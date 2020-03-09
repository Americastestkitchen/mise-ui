import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize } from '../../styles';
import { SearchIcon, Close } from '../DesignTokens/Icon';

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, connectSearchBox, Hits } from 'react-instantsearch-dom';

const StyledSearch = styled.form`
  height: 5rem;
  position: relative;

  input[type="search"] {
    background-color: ${color.whiteSmoke};
    border: none;
    height: 100%;
    font: ${fontSize.lg} ${font.mwr};
    padding-left: 5.2rem;
    width: 100%;

    &::placeholder {
      color: ${color.eclipse};
      font: ${fontSize.lg} ${font.mwr};
      font-style: italic;
      line-height: 1.44;
      text-align: left;
    }

    &::-webkit-search-cancel-button {
      -webkit-appearance:none;
    }
  }
  
  button {
    background: none;
    border: none;
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    top: 50%;
    height: 1.5rem;
    transform: translate(0%,-50%);
  }

  svg {
    fill: ${color.regentGray};
    position: absolute;
    z-index: 1;
    
    &.search-icon {
      height: 2rem;
      left: 0;
      margin-left: 1.6rem;
      top: 50%;
      transform: translateY(-50%);
      width: 2rem;
    }

    &.close {
      left: 0;
      height: 100%;
      top: 0;
      width: 100%;
    }
  }
`;

const StyledSearchBox = ({ currentRefinement, refine, placeholder }) => (
  <StyledSearch noValidate action="" role="search">
    <SearchIcon fill={color.regentGray} />
    <input
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
      placeholder={placeholder}
    />
    <button type="reset" onClick={() => refine('')} hidden={!currentRefinement}>
      <Close ariaLabel="clear search input" fill={color.regentGray} />
    </button>
  </StyledSearch>
)

const SearchBox = connectSearchBox(StyledSearchBox);

const SearchInput = ({
  applicationId,
  searchAPIKey,
  children,
  placeholder,
  indexName,
}) => (
    <InstantSearch
      indexName={indexName}
      searchClient={algoliasearch(applicationId,searchAPIKey)}
    >
        <SearchBox
          placeholder={placeholder}
        />
      {children}
    </InstantSearch>
);

SearchInput.propTypes = {
  children: PropTypes.node,
  indexName: PropTypes.string,
  applicationId: PropTypes.string,
  searchAPIKey: PropTypes.string,
  placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
  applicationId: 'latency',
  searchAPIKey: '6be0576ff61c053d5f9a3225e2a90f76',
  indexName: 'bestbuy',
  children: <Hits />,
  placeholder: 'What are you curious about?'
}

export default SearchInput;