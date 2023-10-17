import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, font, fontSize, lineHeight, mixins, withThemes } from '../../../../styles';

const CtaLinkTheme = {
  default: css`
    color: ${color.tomato};
    transition: color 0.1s ease-in-out;
    font: 700 (${fontSize.md}/18px )${font.pnb};

    &:focus, &:active {
      ${mixins.focusIndicator()};
    }

    &:hover {
      color: ${color.rust};
    }
  `,
  dark: css`
    font: 700 (${fontSize.md} /${lineHeight.sm} )${font.pnb};
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
