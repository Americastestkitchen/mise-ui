import React from 'react';
import styled, { css } from 'styled-components';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { CurrentRefinementsProvided } from 'react-instantsearch-core';
import { color, withThemes } from '../../styles';
import { Close } from '../DesignTokens/Icon';

const StyledResetButtonTheme = {
  default: css`
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    bottom: 0.2rem;
    padding: 1.2rem;
    
    svg {
      fill: ${color.regentGray};
      height: 1rem;
      width: 1rem;
    
      g {
        transition: stroke 0.2s ease-in-out;
      }
    }
   
    &:hover svg g {
      stroke: ${color.mint};
    }
    
    && {
      background-color: ${color.white};
    }
  `,
  kidsSearch: css`
    && {
      background-color: transparent;
    }
   
    &:hover svg g {
      stroke: ${color.jade};
    }
  `,
};

const StyledResetButton = styled.button`
  ${withThemes(StyledResetButtonTheme)}
`;

export interface ResetButtonProps extends CurrentRefinementsProvided {
  handleClick: () => void;
}

const ResetButton = ({
  handleClick,
  items,
  refine,
  query,
}: ResetButtonProps) => (
  <StyledResetButton
    className="search-input__reset-button"
    type="reset"
    onClick={() => { if (handleClick) handleClick(); refine(items); }}
    hidden={!query || query.length === 0}
  >
    <Close
      ariaLabel="clear current search term"
    />
  </StyledResetButton>
);

export default connectCurrentRefinements(ResetButton);
