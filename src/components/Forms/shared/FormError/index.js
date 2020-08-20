import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

const blockTheme = {
  default: css`
    color: ${color.tomato};
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
    letter-spacing: ${letterSpacing.xsm};
    margin: ${spacing.xsm} 0;
  `,
};

const inlineTheme = {
  default: css`
    color: ${color.tomato};
    font: ${fontSize.xsm}/${lineHeight.sm} ${font.pnr};
    letter-spacing: ${letterSpacing.xsm};
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  `,
};

const BLOCK = styled.div`${withThemes(blockTheme)}`;
const INLINE = styled.div`${withThemes(inlineTheme)}`;

const errors = { BLOCK, INLINE };

const FormError = ({ renderAs, ...props }) => {
  const El = renderAs ? errors[renderAs.toUpperCase()] : INLINE;
  return (
    <El
      data-testid="form-error"
      className={`form-error__${renderAs.toLowerCase()}`}
      {...props}
    />
  );
};

FormError.propTypes = {
  /** Indicates which FormError to render. One of: [BLOCK, INLINE]. */
  renderAs: PropTypes.oneOf(['block', 'inline']),
};

FormError.defaultProps = {
  renderAs: 'inline',
};

/** @component */
export default FormError;
