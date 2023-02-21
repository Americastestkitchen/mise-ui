import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { color, font, fontSize, withThemes } from '../../../../styles';
import { getImageUrl } from '../../../../lib/cloudinary';
import { cssArticleBoxStyles, cssThemedLink } from '../../../../styles/mixins';
import ConditionalAnchor from '../../shared/ConditionalAnchor';

const ListItemWrapper = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  @media print {
    display: block !important;
  }

  &:not(:last-child){
    margin-bottom: 1.6rem;
  }

  ${breakpoint('md')`
    flex-direction: row;

    picture {
      margin-right: 2rem;
      max-width: 27.2rem;
    }
  `}

  .list-item__image {
    max-width: 100%;
    margin-bottom: 1.6rem;
    min-height: 24.1rem;
    object-fit: contain;
    object-position: top center;
    @media print {
      max-width: 50% !important;
      min-height: auto !important;
    }

    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
    
    ${breakpoint('md')`
      margin-bottom: 0;
      max-width: 27.2rem;
      min-height: 20.4rem;

      .list-item__source {
        display: none;
      }
    `}
  }
`;

const ListItemContentTheme = {
  default: css`
    font: ${fontSize.md}/2.4rem ${font.pnr};
    .default-content {
      width: 32.1rem;
    }
    .wide-content {
      width: 32.1rem;
    }
    ${cssArticleBoxStyles}

    ${breakpoint('md')`
      .default-content {
        width: 35.6rem;
      }
      .wide-content {
        width: 35.6rem;
      }
    `}    

    ${breakpoint('xlg')`
      .default-content {
        width: 29.2rem;
      }
      .wide-content {
        margin-right: 0.9rem;
        width: 49.9rem; 
      }
    `}
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

const ListItemContent = styled.div`
  ${withThemes(ListItemContentTheme)}
  p {
    @media print {
      page-break-inside: avoid;
    }
  }
  a {
    ${cssThemedLink}
  }
`;

const ImageListItem = ({
  altText,
  cloudinaryId,
  content,
  width,
  anchor,
}) => (
  <ListItemWrapper>
    <ConditionalAnchor showAnchor={!!anchor?.href} displayBlock {...anchor}>
      <picture>
        <source
          alt={altText}
          className="list-item__source"
          srcSet={getImageUrl(cloudinaryId, { aspectRatio: '16:9', width: 272 })}
          media="(min-width: 768px)"
        />
        <img
          alt={altText}
          className="list-item__image"
          crossOrigin="anonymous"
          decoding="async"
          src={getImageUrl(cloudinaryId, { aspectRatio: '16:9', width: 321 })}
        />
      </picture>
    </ConditionalAnchor>
    <ListItemContent
      className={width === 'default' ? 'default-content' : 'wide-content'}
      dangerouslySetInnerHTML={{ __html: content }}
      width={width}
    />
  </ListItemWrapper>
);

ImageListItem.propTypes = {
  altText: PropTypes.string.isRequired,
  cloudinaryId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  width: PropTypes.oneOf(['default', 'wide']).isRequired,
  anchor: PropTypes.object,
};

export default ImageListItem;
