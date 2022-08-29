import React from 'react';
import styled, { css } from 'styled-components';
import { md, xlg } from '../../../../styles/breakpoints';
import { color, font, fontSize } from '../../../../styles';
import { getImageUrl } from '../../../../lib/cloudinary';
import { cssArticleBoxStyles, cssThemedLink, cssThemedColor } from '../../../../styles/mixins';
import ArticleComponentWidthType from '../../types/ArticleComponentWidth';

const ListItemWrapper = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  ${md(css`
    flex-direction: row;

    picture {
      margin-right: 2rem;
      max-width: 27.2rem;
    }
  `)}
`;

const ListItemPicture = styled.picture`
  ${md(css`
    margin-right: 2rem;
    max-width: 27.2rem;
  `)}
`;

const ListItemImage = styled.img`
  max-width: 100%;
  margin-bottom: 1.6rem;
  min-height: 24.1rem;
  object-fit: cover;
  
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  ${md(css`
    margin-bottom: 0;
    max-width: 27.2rem;
    min-height: 20.4rem;
  `)}
`;

const ListItemContent = styled.div`
  font: ${fontSize.md}/2.4rem ${font.pnr};

  .default-content {
    width: 32.1rem;
  }

  .wide-content {
    width: 32.1rem;
  }
  
  a {
    ${cssThemedLink}
  }
  ${cssArticleBoxStyles}
  ${cssThemedColor}

  ${md(css`
    .default-content {
      width: 35.6rem;
    }
    .wide-content {
      width: 35.6rem;
    }
  `)}

  ${xlg(css`
    .default-content {
      width: 29.2rem;
    }
    .wide-content {
      margin-right: 0.9rem;
      width: 49.9rem; 
    }
  `)}
`;

export type ImageListItemProps = {
  altText: string;
  cloudinaryId: string;
  content: string;
  width: ArticleComponentWidthType;
};

const ImageListItem = ({
  altText,
  cloudinaryId,
  content,
  width,
}: ImageListItemProps) => (
  <ListItemWrapper>
    <ListItemPicture>
      <source
        className="list-item__source"
        srcSet={getImageUrl(cloudinaryId, { aspectRatio: '16:9', width: 272 })}
        media="(min-width: 768px)"
      />
      <ListItemImage
        alt={altText}
        className="list-item__image"
        crossOrigin="anonymous"
        decoding="async"
        src={getImageUrl(cloudinaryId, { aspectRatio: '16:9', width: 321 })}
      />
    </ListItemPicture>
    <ListItemContent
      className={width === 'default' ? 'default-content' : 'wide-content'}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </ListItemWrapper>
);

export default ImageListItem;
