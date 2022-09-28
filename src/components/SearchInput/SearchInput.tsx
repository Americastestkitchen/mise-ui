import React from 'react';
import styled, { css } from 'styled-components';
import ResetButton from './ResetButton';
import StyledSearchBox from './StyledSearchBox';
import { color, withThemes } from '../../styles';

const StyledSearchInputContainerTheme = {
  default: css`
    background-color: ${color.white};
    border: 1px solid ${color.silver};
    position: relative;
    width: 100%;
  `,
  kidsSearch: css`
    background-color: transparent;
    border-color: transparent;
    border-radius: 2rem;
    margin-bottom: 1.2rem;
  `,
};

const StyledSearchInputContainer = styled.div`
  ${withThemes(StyledSearchInputContainerTheme)}
`;

export type SearchInputProps = {
  defaultValue?: string,
  handleChange?: () => void,
  handleClickClose: () => void,
  handleFocus?: () => void,
  handleSubmit?: () => void,
  placeholder?: string,
  query?: boolean,
};

const SearchInput = ({
  defaultValue,
  handleChange,
  handleClickClose,
  handleFocus,
  handleSubmit,
  placeholder = 'Search recipes, reviews & more',
  query,
}: SearchInputProps) => (
  <StyledSearchInputContainer
    className="search-input-container"
  >
    <StyledSearchBox
      defaultValue={defaultValue}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleSubmit={handleSubmit}
      placeholder={placeholder}
    />
    <ResetButton
      handleClick={handleClickClose}
      clearsQuery={query}
    />
  </StyledSearchInputContainer>
);

export default SearchInput;
