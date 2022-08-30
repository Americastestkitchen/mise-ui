import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { md, untilMd, mdToXlg, xlg } from '../../../../../styles/breakpoints';
import ArticleFigcaption from '../../../shared/ArticleFigcaption';

const FloatImageFigure = styled.figure`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;

  .article-figcaption {
    max-width: calc(50% - 0.8rem);
  }

  ${untilMd(css`
    margin-top: 3rem;
    order: 1;

    .article-figcaption {
      padding: 0.8rem 0 0;

      &:after {
        top: 0;
      }
    }
  `)}

  ${md(css`
    flex-direction: column;

    .article-figcaption {
      padding: 1.4rem 0 0;
      max-width: 100%;

      &:after {
        top: 0;
      }
    }
  `)}

  ${mdToXlg(css`
    float: right;
  `)}

  &.img-position--float {
    ${md(css`
      margin: 0 0 0 1.6rem;
      max-width: calc(50% - 1.6rem);
      min-width: calc(50% - 1.6rem);
      position: relative;
    `)}

    ${xlg(css`
      float: right;
      padding-bottom: 2.4rem;

      .article-figcaption {
        max-width: 20rem;
        position: absolute;
        right: 0;
        top: 100%;
      }
    `)}
  }

  &.img-position--sidebar {
    ${md(css`
      margin-left: 1.6rem;
      max-width: 16.2rem;
      min-width: 16.2rem;
    `)}

    ${xlg(css`
      position: absolute;
      right: -17.8rem;
    `)}
  }
`;

const FloatImageWrapper = styled.div`
  max-width: calc(50% - 0.8rem);
  width: 100%;

  &.no-caption {
    max-width: 100%;
  }

  ${md(css`
    max-width: 100%;
  `)}

  &.img-position--float {
    ${md(css`
      margin-bottom: 2.4rem;

      &.no-caption {
        float: right;
        margin: 0 0 0 1.6rem;
        max-width: calc(50% - 1.6rem);
        min-width: calc(50% - 1.6rem);
      }
    `)}

    ${xlg(css`
      margin-bottom: 0;

      &.no-caption {
        margin-bottom: 2.4rem;
        max-width: 41.6rem;
        min-width: 41.6rem;
      }
    `)}
  }

  &.img-position--sidebar {
    ${md(css`
      margin-bottom: 1.6rem;

      &.no-caption {
        float: right;
        margin: 0 0 0 1.6rem;
        max-width: 16.2rem;
        min-width: 16.2rem;
      }
    `)}

    ${xlg(css`
      &.no-caption {
        position: absolute;
        right: -17.8rem;
      }
    `)}
  }
`;

const FloatImage = styled.img`
  display: flex;
  max-width: 100%;
  width: 100%;
`;

export interface ArticleTextBlockFloatImageProps {
  altText?: string;
  caption?: string;
  photoDisplayOption: string;
  photoUrl: string;
}

const ArticleTextBlockFloatImage = (
  { altText, caption, photoDisplayOption, photoUrl }:
  ArticleTextBlockFloatImageProps,
) => (
  <>
    {
      caption ? (
        <FloatImageFigure className={`article-text-block-float-image__figure img-position--${photoDisplayOption}`}>
          <FloatImageWrapper className={`article-text-block__img-wrapper img-position--${photoDisplayOption}`}>
            <FloatImage
              alt={altText}
              src={photoUrl}
            />
          </FloatImageWrapper>
          <ArticleFigcaption
            caption={caption}
            decorationPosition="top"
          />
        </FloatImageFigure>
      ) : (
        <FloatImageWrapper className={`article-text-block-float-image__img-wrapper no-caption img-position--${photoDisplayOption}`}>
          <FloatImage
            alt={altText}
            src={photoUrl}
          />
        </FloatImageWrapper>
      )
    }
  </>
);

export default ArticleTextBlockFloatImage;
