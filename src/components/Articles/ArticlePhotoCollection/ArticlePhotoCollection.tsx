import React from 'react';
import styled, { css } from 'styled-components';

import ArticleFigcaption from '../shared/ArticleFigcaption';
import { color, font, fontSize, mixins, withThemes } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';
import { Image } from './imagesResponse';
import { md, xlg } from '../../../styles/breakpoints';
import ArticleComponentWidthType from '../types/ArticleComponentWidth';

const PhotoCollectionWrapper = styled.div`
  margin-bottom: 3rem;

  .photo-collection__default {
    display: flex;
    flex-direction: column;
  }

  .photo-collection__wide {
    display: flex;
    flex-direction: column;
  }

  ${xlg(css`
    .photo-collection__default {
      flex-direction: row;
      ${mixins.articlesWidth('default')}

        figcaption {
          margin-left: 1.6rem;
          min-width: 20rem;
          width: 100%;
        }

        picture:not(:last-child) {
          margin-right: 1.6rem;
        }
      }

      .photo-collection__wide {
        ${mixins.articlesWidth('wide')}

        figcaption {
          max-width: 63.4rem;
          width: 100%;
        }

        picture:not(:last-child) {
          margin-right: 2.2rem;
        }
      }
  `)}
`;

const PhotoCollection = styled.div`
  display: flex;
  max-width: 100%;

  picture:not(:last-child) {
    margin-right: 0.9rem;
  }

  ${md(css`
    max-width: 69.7rem;

    picture:not(:last-child) {
      margin-right: 1.9rem;
    }
  `)}

  ${xlg(css`
    max-width: 86.9rem;
  `)}
`;

const CollectionPicture = styled.picture`
  ${md(css`
    .photo-two-up {
      max-height: 33.9rem;
      max-width: 33.9rem;
    }
    .photo-three-up {
      max-height: 33.9rem;
      max-width: 22.1rem;
    }
  `)}

  ${md(css`
    .photo-two-up {
      ${({ width }:{ width: ArticleComponentWidthType }) => mixins.articlesTwoUpImageCollection(width)}
    }

    .photo-three-up {
      ${({ width }:{ width: ArticleComponentWidthType }) => mixins.articlesThreeUpImageCollection(width)}
    }
  `)}
`;

const ImagesWrapper = styled.div`
  display: flex;
  margin: 0 0 1.2rem;
`;

const CollectionTitleTheme = {
  default: css`
    font: ${fontSize.xl}/2.6rem ${font.pnb};
    margin-bottom: 0.7rem;
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const CollectionTitle = styled.h3`
  ${withThemes(CollectionTitleTheme)}
`;

const cropMap = {
  desktop: {
    wide: {
      'two-up': { width: 413, height: 413 },
      'three-up': { width: 268, height: 413 },
    },
    default: {
      'two-up': { width: 308, height: 308 },
      'three-up': { width: 200, height: 308 },
    },
  },
  tablet: {
    'two-up': { width: 339, height: 339 },
    'three-up': { width: 221, height: 339 },
  },
  mobile: {
    'two-up': { width: 166, height: 166 },
    'three-up': { width: 108, height: 166 },
  },
};

export interface ArticlePhotoCollectionProps {
  /* Editorial caption for collection */
  caption?: string;
  /* Count of images, determines 2-up or 3-up treatment */
  count: 2 | 3;
  /* Array of image objects */
  images: Image[];
  /* Heading level 3 title for collection */
  title?: string;
  /* Width configuration for ArticlePhotoCollection */
  width: 'default' |'wide';
}

const ArticlePhotoCollection = ({
  caption,
  count,
  images,
  title,
  width,
}:ArticlePhotoCollectionProps) => (
  <PhotoCollectionWrapper>
    { title && <CollectionTitle>{title}</CollectionTitle> }
    <PhotoCollection className={`photo-collection__${width}`}>
      <ImagesWrapper>
        {images.map((image, i) => {
          const imageClass = count === 2 ? 'two-up' : 'three-up';
          const {
            alt,
            height: imageHeight,
            publicId,
            width: imageWidth,
          } = image;
          const ar = imageHeight && imageWidth ? imageWidth / imageHeight : null;

          return (
            <CollectionPicture
              className={`photo-collection__${imageClass}`}
              key={`${publicId.slice(-10)}-${i}`}
              width={width}
            >
              <source
                srcSet={getImageUrl(publicId, { aspectRatio: ar, ...cropMap.desktop[width][imageClass], crop: 'fill' })}
                media="(min-width: 1136px)"
              />
              <source
                srcSet={getImageUrl(publicId, { aspectRatio: ar, ...cropMap.tablet[imageClass], crop: 'fill' })}
                media="(min-width: 768px)"
              />
              <img
                alt={alt}
                className={`photo-${imageClass}`}
                crossOrigin="anonymous"
                decoding="async"
                src={getImageUrl(publicId, { aspectRatio: ar, ...cropMap.mobile[imageClass], crop: 'fill' })}
              />
            </CollectionPicture>
          );
        })}
      </ImagesWrapper>
      { caption && (
        <ArticleFigcaption
          caption={caption}
          className="photo-collection__caption"
          decorationPosition={width === 'default' ? 'top' : 'bottom'}
        />
      )}
    </PhotoCollection>
  </PhotoCollectionWrapper>
);

export default ArticlePhotoCollection;
