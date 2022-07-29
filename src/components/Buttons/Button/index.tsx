import React from 'react';
import PropTypes from 'prop-types';
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
        background-color: ${color.darkTeal};
      }
    }
  `,
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const StyledButton = styled.button`
${withThemes(StyledButtonTheme)}
`;

function Button({
  className,
  children,
  onClick,
  type,
  ...restProps
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  type: 'button',
};

export default Button;
