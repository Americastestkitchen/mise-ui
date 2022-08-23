import React, { PropsWithChildren } from 'react';
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

const errors = {
  block: styled.div`${withThemes(blockTheme)}`,
  inline: styled.div`${withThemes(inlineTheme)}`,
};

type FormErrorPropType = PropsWithChildren<{
  renderAs?: 'block' | 'inline',
}>

export default function FormError({
  renderAs = 'inline',
  ...props
} :FormErrorPropType) {
  const El = renderAs ? errors[renderAs] : errors.inline;
  return (
    <El
      role="alert"
      data-testid="form-error"
      className={`form-error__${renderAs.toLowerCase()}`}
      {...props}
    />
  );
}
