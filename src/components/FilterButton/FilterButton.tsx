import React from 'react';
import styled, { css } from 'styled-components';
import { color, font, fontSize, letterSpacing, lineHeight, spacing, withThemes, mixins } from '../../styles';
import { cssThemedColor } from '../../styles/mixins';
import Filter from '../DesignTokens/Icon/svgs/Filter';

const StyledFilterButtonTheme = {
  default: css`
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
    padding: ${spacing.xsm};
    &:focus {
      ${mixins.focusIndicator()}
    }
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
  ${cssThemedColor}
  ${withThemes(StyledFilterButtonTheme)}
`;

const StyledFilterTheme = {
  default: css`
    height: 1rem;
    margin-left: ${spacing.xsm};
    width: 1.7rem;
  `,
  cco: css`
   g line {
     stroke: ${color.black};
   }
  `,
  cio: css`
    g line {
      stroke: ${color.cork};
    }
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

export type FilterButtonProps = {
  ariaControls?: string,
  ariaExpanded?: boolean,
  ariaLabel?: string,
  className?: string,
  id?: string;
  onClick(): void;
  text?: string;
}

export default function FilterButton({
  ariaControls,
  ariaExpanded,
  ariaLabel,
  className,
  id,
  onClick,
  text = 'Filter',
}: FilterButtonProps) {
  return (
    <StyledFilterButton
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      className={className}
      id={id}
      onClick={onClick}
    >
      {text}
      <StyledFilter />
    </StyledFilterButton>
  );
}
