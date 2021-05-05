import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { color, font, fontSize, lineHeight, mixins } from '../../../styles';

const ArticleTextBlockWrapper = styled.div`
  margin-bottom: 3rem;
  width: 100%;

  ${breakpoint('xlg')`
    ${({ width }) => (mixins.articlesWidth(width))}
  `}
`;

const ArticleTextBlockHeading = styled.h3`
  color: ${color.eclipse};
  font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
  margin-bottom: 0.8rem;
`;

const ArticleTextBlockP = styled.p`
  color: ${color.eclipse};
  font: ${fontSize.md}/${lineHeight.lg} ${font.mwr};

  a {
    ${mixins.styledLink(color.turquoise, color.seaSalt)}
  }

  &.drop-cap {
    font-size: 2rem;

    &:first-letter {
      float: left;
      font-size: 6rem;
      font-weight: bold;
      line-height: 5rem;
      padding: 0.6rem 0.8rem 0 0;
    }
  }
`;

const ArticleTextBlock = ({ content, title, dropCap, width }) => (
  <ArticleTextBlockWrapper width={width}>
    {
      title && (
        <ArticleTextBlockHeading>
          {title}
        </ArticleTextBlockHeading>
      )
    }
    <ArticleTextBlockP
      className={`article-text-block__p${dropCap ? ' drop-cap' : ''}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </ArticleTextBlockWrapper>
);

ArticleTextBlock.propTypes = {
  /** Text content */
  content: PropTypes.string.isRequired,
  /** Heading level 3 title for text block */
  title: PropTypes.string,
  /** Display drop cap styles? */
  dropCap: PropTypes.bool,
  /** Width configuration for PullQuote */
  width: PropTypes.oneOf(['default', 'wide']),
};

ArticleTextBlock.defaultProps = {
  title: null,
  dropCap: false,
  width: 'default',
};

export default ArticleTextBlock;
