import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import ArticleFigcaption from '../shared/ArticleFigcaption';
import { mixins } from '../../../styles';
import ConditionalAnchor from '../shared/ConditionalAnchor';

const ArticleImageFigure = styled.figure`
  padding: 0;
  margin: 0 0 2.8rem;

  ${breakpoint('xs', 'xlg')`
    .article-figcaption {
      padding-bottom: 1.2rem;
    }
  `}

  ${breakpoint('xlg')`
    display: flex;

    .article-figcaption {
      max-width: 20rem;
      width: 100%;
    }

    &.article-image__figure--wide {
      flex-direction: column;

      .article-figcaption {
        max-width: 63.4rem;
        width: 100%;
      }
    }
  `}
`;

const ArticleImagePicture = styled.picture`
  img {
    display: block;
    margin-bottom: 1.2rem;

    ${breakpoint('xlg')`
      margin-right: 1.6rem;
      ${mixins.articlesWidth('default')}
    `}
  }

  &.article-image__picture--wide {
    img {
      margin-right: 0;

      ${breakpoint('xlg')`
        ${mixins.articlesWidth('wide')}
      `}
    }
  }
`;

const ArticleImage = ({ alt, caption, desktopSrc, imgSrc, tabletSrc, width, href, hrefTitle }) => (
  <ArticleImageFigure className={`article-image__figure--${width}`}>
    <ConditionalAnchor showAnchor={!!href} href={href} title={hrefTitle} displayBlock>
      <ArticleImagePicture className={`article-image__picture--${width}`}>
        {
        desktopSrc && (
          <source
            media="(min-width: 1136px)"
            srcSet={desktopSrc}
          />
        )
      }
        {
        tabletSrc && (
          <source
            media="(min-width: 768px)"
            srcSet={tabletSrc}
          />
        )
      }
        <img
          alt={alt}
          crossOrigin="anonymous"
          decoding="async"
          src={imgSrc}
        />
      </ArticleImagePicture>
    </ConditionalAnchor>
    {
      caption && (
        <ArticleFigcaption
          caption={caption}
          decorationPosition={width === 'default' ? 'top' : 'bottom'}
        />
      )
    }
  </ArticleImageFigure>
);

ArticleImage.propTypes = {
  /** Alt text for image. */
  alt: PropTypes.string,
  /** Editorial caption for image */
  caption: PropTypes.string,
  /** Desktop sized image source */
  desktopSrc: PropTypes.string,
  /** Default image source */
  imgSrc: PropTypes.string.isRequired,
  /** Tablet sized image source */
  tabletSrc: PropTypes.string,
  /** Width configuration for PullQuote */
  width: PropTypes.oneOf(['default', 'wide']),
  href: PropTypes.string,
  hrefTitle: PropTypes.string,
};

ArticleImage.defaultProps = {
  alt: '',
  caption: null,
  desktopSrc: null,
  tabletSrc: null,
  width: 'default',
};

export default ArticleImage;
