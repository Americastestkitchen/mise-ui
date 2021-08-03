import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ArticleFigcaption from '../shared/ArticleFigcaption';
import { Quote } from '../../DesignTokens/Icon/svgs';
import { color, font, fontSize, mixins, withThemes } from '../../../styles';

const PullQuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  width: 100%;

  ${breakpoint('md')`
    flex-direction: row;
    max-width: 56rem;
  `}

  ${breakpoint('xlg')`
    ${({ width }) => (mixins.articlesWidth(width))}
  `}
`;

const PullQuoteIconTheme = {
  default: css`
    height: 3rem;
    margin-bottom: 0.8rem;
    min-width: 3rem;
    width: 3rem;

    svg {
      height: 100%;
      width: 100%;
    }

    ${breakpoint('md')`
      margin-right: 1.6rem;
    `}
  `,
  atk: css`
    svg {
      circle {
        fill: ${color.mint};
      }
    }
  `,
  cco: css`
    svg {
      circle {
        fill: ${color.denim};
      }
    }
  `,
  cio: css`
    svg {
      circle {
        fill: ${color.squirrel};
      }
    }
  `,
};

const PullQuoteIcon = styled.div`
  ${withThemes(PullQuoteIconTheme)}
`;

const PullQuoteFigure = styled.figure`
  margin: 0;
  padding: 0;

  ${breakpoint('xlg')`
    .article-figcaption {
      padding-bottom: 0.8rem;
    }
  `}
`;

const PullQuoteBlockQuoteTheme = {
  default: css`
    font-size: ${fontSize.xl};
    line-height: 1.3;
    margin: 0 0 1.2rem 0;
    padding: 0;
  `,
  atk: css`
    color: ${color.eclipse};
    font-family: ${font.mwr};
    font-style: italic;
    font-weight: bold;
  `,
  cco: css`
    color: ${color.black};
    font-family: ${font.clb};
  `,
  cio: css`
    color: ${color.cork};
    font-family: ${font.mwr};
    font-style: italic;
    font-weight: bold;
  `,
};

const PullQuoteBlockQuote = styled.blockquote`
  ${withThemes(PullQuoteBlockQuoteTheme)}
`;

const PullQuote = ({ attribution, includeIcon, quote, width }) => (
  <PullQuoteWrapper className="pull-quote" width={width}>
    {
      includeIcon && (
        <PullQuoteIcon data-testid="pull-quote__icon">
          <Quote />
        </PullQuoteIcon>
      )
    }
    <PullQuoteFigure>
      <PullQuoteBlockQuote data-testid="pull-quote__block-quote">
        {quote}
      </PullQuoteBlockQuote>
      {
        attribution && (
          <ArticleFigcaption
            caption={attribution}
            decorationPosition="bottom"
          />
        )
      }
    </PullQuoteFigure>
  </PullQuoteWrapper>
);

PullQuote.propTypes = {
  /** Person attributed with saying the quote */
  attribution: PropTypes.string,
  /** Should component render quote icon? */
  includeIcon: PropTypes.bool,
  /** Text content of quote */
  quote: PropTypes.string.isRequired,
  /** Width configuration for PullQuote */
  width: PropTypes.oneOf(['default', 'wide']),
};

PullQuote.defaultProps = {
  attribution: null,
  includeIcon: true,
  width: 'default',
};

export default PullQuote;
