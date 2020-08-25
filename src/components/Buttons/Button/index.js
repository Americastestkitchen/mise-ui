import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
} from '../../../styles';

const StyledButton = styled.button`
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

  @media(hover: hover) {
    &:hover {
      background-color: ${color.mint};
    }
  }
`;

function Button({
  className,
  children,
  onClick,
  type,
  ...restProps
}) {
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
