import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArticleFigcaption from '../shared/ArticleFigcaption';
import { color, font, fontSize, mixins } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';

const PhotoCollectionWrapper = styled.div`
  .photo-collection__default {
    display: flex;
    flex-direction: column;
  }

  .photo-collection__wide {
    display: flex;
    flex-direction: column;
  }

  ${breakpoint('xlg')`
    .photo-collection__default {
      flex-direction: row;
      margin-bottom: 3rem;
      ${mixins.articlesWidth('default')}

        figcaption {
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
  `}
`;

const PhotoCollection = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
  max-width: 34.1rem;

  picture:not(:last-child) {
    margin-right: 0.9rem;
  }

  ${breakpoint('md')`
    max-width: 69.7rem;

    picture:not(:last-child) {
      margin-right: 1.9rem;
    }
  `}

  ${breakpoint('xlg')`
    max-width: 86.9rem;
  `}
`;

const CollectionPicture = styled.picture`
  .photo-two-up {
    max-height: 16.6rem;
    max-width: 16.6rem;
  }
  .photo-three-up {
    max-height: 16.6rem;
    max-width: 10.8rem;
  }

  ${breakpoint('md')`
    .photo-two-up {
      max-height: 33.9rem;
      max-width: 33.9rem;
    }
    .photo-three-up {
      max-height: 33.9rem;
      max-width: 22.1rem;
    }
  `}

  ${breakpoint('xlg')`
    .photo-two-up {
      ${({ width }) => mixins.articlesTwoUpImageCollection(width)}
    }  

    .photo-three-up {
      ${({ width }) => mixins.articlesThreeUpImageCollection(width)}
    }
  `}
`;

const ImagesWrapper = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
  margin-right: 1.6rem;
`;

const CollectionTitle = styled.h3`
  color: ${color.eclipse};
  font: ${fontSize.xl}/2.6rem ${font.pnb};
  margin-bottom: 0.7rem;
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

const ArticlePhotoCollection = ({
  caption,
  count,
  items,
  title,
  width,
}) => (
  <PhotoCollectionWrapper>
    { title && <CollectionTitle>{title}</CollectionTitle> }
    <PhotoCollection className={`photo-collection__${width}`}>
      <ImagesWrapper>
        {items.map((el, i) => {
          const imageClass = count === 2 ? 'two-up' : 'three-up';
          const { altText: alt, photo } = el.attributes;
          const ar = photo.contentWidth / photo.height;

          return (
            <CollectionPicture
              className={`photo-collection__${imageClass}`}
              key={`${photo.publicId.slice(-10)}-${i}`}
              width={width}
            >
              <source
                srcSet={getImageUrl(photo.publicId, { aspectRatio: ar, ...cropMap.desktop[width][imageClass], crop: 'fill' })}
                media="(min-width: 1136px)"
              />
              <source
                srcSet={getImageUrl(photo.publicId, { aspectRatio: ar, ...cropMap.tablet[imageClass], crop: 'fill' })}
                media="(min-width: 768px)"
              />
              <img
                alt={alt}
                className={`photo-${imageClass}`}
                src={getImageUrl(photo.publicId, { aspectRatio: ar, ...cropMap.mobile[imageClass], crop: 'fill' })}
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

ArticlePhotoCollection.propTypes = {
  caption: PropTypes.string,
  count: PropTypes.oneOf([2, 3]).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  width: PropTypes.oneOf(['default', 'wide']).isRequired,
};

ArticlePhotoCollection.defaultProps = {
  caption: null,
  title: null,
};

export default ArticlePhotoCollection;
