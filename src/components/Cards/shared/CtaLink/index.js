import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, mixins, withThemes } from '../../../../styles';

const CtaLinkTheme = {
  default: css`
    color: ${color.tomato};
    transition: color 0.1s ease-in-out;
    font: 1.2rem/${lineHeight.sm} ${font.pnb};

    &:hover {
      color: ${color.rust};
    }

    ${breakpoint('lg')`
      font-size: ${fontSize.md};
    `}
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

const CtaLink = ({ ctaText, ctaUrl, dataAttrs, onClick }) => (
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

CtaLink.propTypes = {
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string.isRequired,
  dataAttrs: PropTypes.object,
  onClick: PropTypes.func,
};

CtaLink.defaultProps = {
  onClick: null,
  dataAttrs: {},
};

export default CtaLink;
