import React from 'react';
import styled, { css } from 'styled-components';
import { color, font, fontSize, lineHeight, withThemes } from '../../../../styles';

const TitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    transition: color 0.2s ease;

    @media(hover: hover) {
      &:hover {
        color: ${color.mint};
      }
    }
  `,
  cco: css`
    @media(hover: hover) {
      &:hover {
        color: ${color.denim};
      }
    }
  `,
  cio: css`
    @media(hover: hover) {
      &:hover {
        color: ${color.squirrel};
      }
    }
  `,
  dark: css`
    @media(hover: hover) {
      &:hover {
        color: ${color.silver};
      }
    }
  `,
};
const StyledTitle = styled.p`
  ${withThemes(TitleTheme)};
`;

type TitleProps = {
  className?: string,
  title: string,
}

const Title = ({ className, title }: TitleProps) => (
  <StyledTitle
    className={className}
  >
    {title}
  </StyledTitle>
);

export default Title;
