import React, { useEffect, useRef, MutableRefObject } from 'react';
import styled, { css } from 'styled-components';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchBoxProvided } from 'react-instantsearch-core';
import { sm, md } from '../../styles/breakpoints';
import { color, font, fontSize, lineHeight, withThemes } from '../../styles';
import { SearchIcon } from '../DesignTokens/Icon';

const StyledSearchTheme = {
  default: css`
    position: relative;
    width: 100%;
    
    input[type="search"] {
      border: none;
      color: ${color.eclipse};
      font: ${fontSize.lg} ${font.mwr};
      padding: 1.35rem 2.5rem 1.35rem 4.5rem;
      width: 100%;
    
      &::placeholder {
        color: ${color.eclipse};
        font: ${fontSize.lg} ${font.mwr};
        font-style: italic;
        text-align: left;
      }
    
      &:-moz-placeholder,
      &::-moz-placeholder {
        opacity: 1;
      }
    
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }
    
    svg {
      fill: ${color.regentGray};
      position: absolute;
      z-index: 1;
    
      &.search-icon {
        bottom: 0;
        height: 2.3rem;
        left: 0;
        margin: auto auto auto 1.2rem;
        top: 0;
        width: 2.3rem;
      }
    }
  `,
  kidsSearch: css`
    svg path {
      fill: ${color.jade};
    }
    
    input[type="search"] {
      color: ${color.black};
      font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
      border-radius: 2rem;
    
      &::placeholder {
        color: ${color.black};
        font: 1.5rem/1.4 ${font.pnr};
        font-style: normal;
      }
    }
  
    ${sm(css`
      input[type="search"] {
        &::placeholder {
          font-size: ${fontSize.md};
        }
      }
    `)}
    
    ${md(css`
      font-size: ${fontSize.lg};
    `)}
  `,
};

const StyledSearch = styled.form`
  ${withThemes(StyledSearchTheme)}
`;

export interface StyledSearchBoxProps extends SearchBoxProvided {
  defaultValue?: string;
  delay?: number;
  handleChange?: () => void;
  handleFocus?: () => void;
  handleSubmit?: () => void;
  placeholder: string;
}

const StyledSearchBox = ({
  defaultValue,
  delay = 200,
  handleChange,
  handleFocus,
  handleSubmit,
  placeholder,
  refine,
}: StyledSearchBoxProps) => {
  let timerId: NodeJS.Timeout | null = null;
  const inputElement: MutableRefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      const tempVal = inputElement.current.value;
      inputElement.current.focus();
      inputElement.current.value = '';
      inputElement.current.value = tempVal;
    }
  }, []);

  const onChangeDebounced = (evt: React.FormEvent<HTMLInputElement>) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const value = evt.currentTarget.value;
    timerId = setTimeout(
      () => {
        refine(value);
        if (handleChange) handleChange();
      },
      delay,
    );
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (timerId) {
      clearTimeout(timerId);
    }
    if (inputElement.current) {
      inputElement.current.blur();
      if (handleSubmit) handleSubmit();
      refine(inputElement.current.value);
    }
  };

  const onFocus = () => {
    if (handleFocus) handleFocus();
  };

  return (
    <StyledSearch
      noValidate
      action=""
      onSubmit={onSubmit}
    >
      <SearchIcon
        fill={color.mint}
      />
      <input
        className="search-input__input"
        type="search"
        defaultValue={defaultValue}
        ref={inputElement}
        onChange={onChangeDebounced}
        onFocus={onFocus}
        placeholder={placeholder}
      />
    </StyledSearch>
  );
};

export default connectSearchBox(StyledSearchBox);
