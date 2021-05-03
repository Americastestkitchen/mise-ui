import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { color, font, fontSize } from '../../../../styles';

const ArticleFigcaptionWrapper = styled.figcaption`
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
    background-color: ${color.mint};
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
`;

const ArticleFigcaption = ({ caption, decorationPosition }) => (
  <ArticleFigcaptionWrapper
    className="article-figcaption"
    decorationPosition={decorationPosition}
  >
    {caption}
  </ArticleFigcaptionWrapper>
);

ArticleFigcaption.propTypes = {
  /** Caption text */
  caption: PropTypes.string.isRequired,
  /** Postion style decoration above or below caption (Only applies to desktop) */
  decorationPosition: PropTypes.oneOf(['bottom', 'top']).isRequired,
};

export default ArticleFigcaption;
