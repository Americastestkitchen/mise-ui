import React from 'react';
import styled, { css } from 'styled-components';

import ArticleFigcaption from '../shared/ArticleFigcaption';
import ArticleComponentWidthType from '../types/ArticleComponentWidth';
import { Quote } from '../../DesignTokens/Icon/svgs';
import { color, font, fontSize, mixins, withThemes } from '../../../styles';
import { md, xlg } from '../../../styles/breakpoints';


const PullQuoteWrapper = styled.div<{ width: ArticleComponentWidthType }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  width: 100%;

  ${md(css`
    flex-direction: row;
    max-width: 56rem;
  `)}

  ${({ width }) => `${xlg(css`${mixins.articlesWidth(width)}`)}`}
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

    ${md(css`
      margin-right: 1.6rem;
    `)}
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

  ${xlg(css`
    .article-figcaption {
      padding-bottom: 0.8rem;
    }
  `)}
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

export type PullQuoteProps = {
  attribution?: string;
  includeIcon?: boolean;
  quote: string;
  width?: ArticleComponentWidthType;
};

const PullQuote = ({
  attribution,
  includeIcon = true,
  quote,
  width = 'default',
}: PullQuoteProps) => (
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

export default PullQuote;
