/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font, fontSize } from '../../../styles';

const MadeForYouCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.white};
  font: ${fontSize.md}/1 ${font.pnr};
  width: 272px;

  > a {
    height: 264px;
    width: 100%;
    overflow: hidden;
    
    img {
      transition: all 0.3s ease 0s;
      object-fit: cover;
    }
  }


  &:hover {
    img {
      transform: translateY(-0.8rem);
      z-index:0;
    }
  }
`;

const MadeForYouCardTitleWrapper = styled.div`
  padding: 40px 20px;

  a {
    width: 21.5rem;
    height: 9rem;
    display: flex;
    align-items: center;
  }

  h3 {
    font-family: ${font.pnb};
    font-size: 26px;
    line-height: 1.15;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

const getBgColor = (index) => {
  const colors = ['#1a3352', '#b25b18', '#321a52', '#1775c2', '#857351', '#521a2d', '#405700', '#005e71', '#167a7a'];

  // Get colors in a loop
  const indexRemainder = index < colors.length ? index : index % colors.length;

  return colors[indexRemainder];
};

const getTitle = (title = '') => {
  if (title.toLowerCase() === 'fresh picks for you') {
    return title;
  }

  return `${title} Recipes for You`;
};

const MadeForYouCard = ({
  index,
  cloudinary_url,
  collection_type,
  url,
}) => {
  const title = getTitle(collection_type);

  return (
    <MadeForYouCardWrapper title={title} data-collection-type={collection_type} className="made-for-you-card">
      <a href={url} title={title}>
        <img src={cloudinary_url} alt={title} />
      </a>
      <MadeForYouCardTitleWrapper style={{ backgroundColor: getBgColor(index) }}>
        <a href={url}>
          <h3>{title}</h3>
        </a>
      </MadeForYouCardTitleWrapper>
    </MadeForYouCardWrapper>
  );
};

MadeForYouCard.propTypes = {
  index: PropTypes.number,
  cloudinary_url: PropTypes.string.isRequired,
  collection_type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

MadeForYouCard.defaultProps = {
  index: 0,
};

export default MadeForYouCard;
