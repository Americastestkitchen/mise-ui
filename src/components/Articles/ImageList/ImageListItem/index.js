import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { color, font, fontSize } from '../../../../styles';
import { getImageUrl } from '../../../../lib/cloudinary';

const ListItemWrapper = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;

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
    max-width: 32.1rem;
    margin-bottom: 1.6rem;
    min-height: 24.1rem;
    object-fit: cover;

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

const ListItemContent = styled.p`
  color: ${color.eclipse};
  font: ${fontSize.md}/2.4rem ${font.pnr};
  .default-content {
    width: 32.1rem;
  }
  .wide-content {
    width: 32.1rem;
  }

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

`;

const ImageListItem = ({
  altText,
  cloudinaryId,
  content,
  width,
}) => (
  <ListItemWrapper>
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
        src={getImageUrl(cloudinaryId, { aspectRatio: '16:9', width: 321 })}
      />
    </picture>
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
};

export default ImageListItem;
