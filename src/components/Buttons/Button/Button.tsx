import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  mixins,
  spacing,
  withThemes,
} from '../../../styles';

const StyledButtonTheme = {
  default: css`
    background-color: ${color.eclipse};
    color: ${color.white};
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
    height: 4rem;
    letter-spacing: ${letterSpacing.xxlg};
    line-height: 4rem;
    max-width: 100%;
    padding: 0 ${spacing.xlg};
    text-align: center;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s all ease;
    white-space: nowrap;
    &:focus {
      ${mixins.focusIndicator()}
      z-index: 1;
    }

    @media(hover: hover) {
      &:hover {
        background-color: ${color.mint};
      }
    }
  `,
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const StyledButton = styled.button<{isFavorited?: boolean, iconType?: string}>`
${withThemes(StyledButtonTheme)}
`;

export type ButtonType = 'submit' | 'reset' | 'button';

export type DefaultButton = React.ComponentPropsWithoutRef<'button'> & {
  className?: string;
  children?: ReactNode;
  onClick?(): void;
  type?: ButtonType;
  isFavorited?: boolean;
  iconType?: string;
}

export default function Button({
  className,
  children,
  onClick,
  type = 'button',
  isFavorited,
  iconType,
  ...restProps
}: DefaultButton) {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type}
      isFavorited={isFavorited}
      iconType={iconType}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
}
