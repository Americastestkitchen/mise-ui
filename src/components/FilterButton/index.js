import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, font, fontSize, letterSpacing, lineHeight, spacing, withThemes } from '../../styles';
import Filter from '../DesignTokens/Icon/svgs/Filter';

const StyledFilterButtonTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
    padding: ${spacing.xsm};
  `,
  kidsSearch: css`
    color: ${color.black};
    font: 2.2rem/${lineHeight.sm} ${font.cwf};
    letter-spacing: 1.2px;
    padding-top: 0;
    text-transform: lowercase;
  `,
  dark: css`
    color: ${color.white};
    font-family: ${font.pnr};
    letter-spacing: ${letterSpacing.md};
    text-transform: uppercase;
  `,
};

const StyledFilterButton = styled.button`
  ${withThemes(StyledFilterButtonTheme)}
`;

const StyledFilterTheme = {
  default: css`
    height: 1rem;
    margin-left: ${spacing.xsm};
    width: 1.7rem;
  `,
  dark: css`
    g {
      line {
        stroke: ${color.white};
      }
    }
  `,
};

const StyledFilter = styled(Filter)`
  ${withThemes(StyledFilterTheme)}
`;

const FilterButton = ({ className, onClick, text }) => (
  <StyledFilterButton
    className={className}
    onClick={onClick}
  >
    {text}
    <StyledFilter />
  </StyledFilterButton>
);

FilterButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

FilterButton.defaultProps = {
  className: null,
  onClick: null,
  text: 'Filter',
};

export default FilterButton;
