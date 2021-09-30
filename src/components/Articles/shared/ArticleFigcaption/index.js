import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { color, font, fontSize, mixins, withThemes } from '../../../../styles';

const ArticleFigcaptionTheme = {
  default: css`
    color: ${color.mediumGray};
    font: ${fontSize.md}/1.5 ${font.pnb};
    position: relative;

    ${breakpoint('xs', 'xlg')`
      padding-bottom: 0.8rem;
    `}

    ${breakpoint('xlg')`
      ${({ decorationPosition }) => (decorationPosition === 'bottom' ? 'padding-bottom: 0.8rem;' : 'padding-top: 0.8rem;')}
    `}

    &::after {
      content: '';
      display: block;
      height: 0.6rem;
      position: absolute;
      width: 1.6rem;

      ${breakpoint('xs', 'xlg')`
        bottom: 0;
      `}

      ${breakpoint('xlg')`
        ${({ decorationPosition }) => (decorationPosition === 'bottom' ? 'bottom: 0;' : 'top: 0;')}
      `}
    }

    a {
      ${mixins.styledLink(color.turquoise, color.seaSalt)}
    }
  `,
  atk: css`
    a {
      ${mixins.styledLink(color.turquoise, color.seaSalt)}
    }

    &::after {
      background-color: ${color.mint};
    }
  `,
  cco: css`
    a {
      ${mixins.styledLink(color.malibu, color.cornflower)}
    }

    &::after {
      background-color: ${color.denim};
    }
  `,
  cio: css`
    a {
      ${mixins.styledLink(color.dijon, color.sand)}
    }

    &::after {
      background-color: ${color.squirrel};
    }
  `,
};

const ArticleFigcaptionWrapper = styled.figcaption`
  ${withThemes(ArticleFigcaptionTheme)}
`;

const ArticleFigcaption = ({ caption, decorationPosition }) => (
  <ArticleFigcaptionWrapper
    className="article-figcaption"
    dangerouslySetInnerHTML={{ __html: caption }}
    decorationPosition={decorationPosition}
  />
);

ArticleFigcaption.propTypes = {
  /** Caption text */
  caption: PropTypes.string.isRequired,
  /** Postion style decoration above or below caption (Only applies to desktop) */
  decorationPosition: PropTypes.oneOf(['bottom', 'top']).isRequired,
};

export default ArticleFigcaption;
