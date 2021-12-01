import React, { ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';
import { color, font, fontSize } from '../../styles';

const cssFont = css`
  font-family: ${font.pnb};
  font-size: ${fontSize.xsm};
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: ${color.white};
`;

const cssContainer = css`
  display: inline-flex;
  align-items: center;
  height: 15px;
  padding: 0 5px;
  white-space: nowrap;

  border-radius: 5px;
  background-color: ${color.transparentBlack};
  @media print {
    background-color: ${color.black};
  }
`;

const cssChildSvg = css`& > svg {
  margin-right: 4px;
  height: 8px;
}`;

const Container = styled.span`
  ${cssFont}
  ${cssContainer}
  ${cssChildSvg}
`;

export default function Chip({ children, ...rest }: ComponentPropsWithoutRef<'span'>) {
  return <Container {...rest}>{children}</Container>;
}

export const ChipSC = {
  Container,
};
