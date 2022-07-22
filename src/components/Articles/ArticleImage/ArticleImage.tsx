import React from 'react';
import styled, { css } from 'styled-components';
import { untilXlg, xlg } from '../../../styles/breakpoints';

import ArticleFigcaption from '../shared/ArticleFigcaption';
import { mixins } from '../../../styles';

const ArticleImageFigure = styled.figure`
  padding: 0;
  margin: 0 0 2.8rem;

  ${untilXlg(css`
    .article-figcaption {
      padding-bottom: 1.2rem;
    }
  `)}

  ${xlg(css`
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
  `)}
`;

const ArticleImagePicture = styled.picture`
  img {
    display: block;
    margin-bottom: 1.2rem;

    ${xlg(css`
      margin-right: 1.6rem;
      ${mixins.articlesWidth('default')}
    `)}
  }

  &.article-image__picture--wide {
    img {
      margin-right: 0;

      ${xlg(css`
        ${mixins.articlesWidth('wide')}
      `)}
    }
  }
`;

export type Width = 'default' | 'wide';

export type ArticleImageProps = {
  alt?: string;
  caption?: string;
  desktopSrc?: string;
  imgSrc: string;
  tabletSrc?: string;
  width: Width
}

export default function ArticleImage({
  alt,
  caption,
  desktopSrc,
  imgSrc,
  tabletSrc,
  width = 'default',
}: ArticleImageProps) {
  return (
    <ArticleImageFigure className={`article-image__figure--${width}`}>
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
}
