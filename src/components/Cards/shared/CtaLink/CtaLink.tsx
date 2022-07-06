import React from 'react';
import styled, { css } from 'styled-components';
import { color, font, fontSize, lineHeight, mixins, withThemes } from '../../../../styles';

const CtaLinkTheme = {
  default: css`
    color: ${color.tomato};
    transition: color 0.1s ease-in-out;
    font: ${fontSize.md}/18px ${font.pnb};

    &:hover {
      color: ${color.rust};
    }
  `,
  dark: css`
    font: ${fontSize.md} /${lineHeight.sm} ${font.pnb};
    ${mixins.styledLink(color.tomato, color.rust, color.white)};
    &:hover {
      color: ${color.white};
    }
  `,
};

const StyledCtaLink = styled.a`
  ${withThemes(CtaLinkTheme)};
`;

type CtaLinkPropType = {
  ctaText: string,
  ctaUrl: string,
  dataAttrs?: Record<string, unknown>,
  onClick?(): void,
}

const CtaLink = ({ ctaText, ctaUrl, dataAttrs, onClick }: CtaLinkPropType) => (
  <StyledCtaLink
    aria-label={`${ctaText} (opens in new window)`}
    className="cta-link"
    href={ctaUrl}
    target="_blank"
    onClick={onClick}
    {...dataAttrs}
  >
    {ctaText}
  </StyledCtaLink>
);

export default CtaLink;
