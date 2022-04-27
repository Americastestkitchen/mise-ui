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

  img {
    height: 230px;
    display: block;
  }
`;

const MadeForYouCardTitleWrapper = styled.div`
  padding: 20px;

  div {
    display: flex;
    justify-content: items-start;
    align-items: center;
  }

  h4 {
    font-size: 16px;
    margin-right: 6px;
    white-space: pre;
  }

  span {
    font-family: ${font.pnb};
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: 1.6px;
    padding: 4px 8px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-family: ${font.pnb};
    font-size: 26px;
    line-height: 1.15;
    text-align: center;
    margin: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 86px;
  }
`;

const getBgColor = (index) => {
  const colors = ['#1a3352', '#b25b18', '#321a52', '#1775c2', '#857351', '#521a2d', '#405700', '#005e71', '#167a7a'];

  // Get colors in a loop
  const indexRemainder = index < colors.length ? index : index % colors.length;

  return colors[indexRemainder];
};

const MadeForYouCard = ({
  index,
  cloudinary_url,
  title,
  collection_type,
}) => (
  <MadeForYouCardWrapper>
    <img src={cloudinary_url} alt={collection_type} />
    <MadeForYouCardTitleWrapper style={{ backgroundColor: getBgColor(index) }}>
      <div>
        <h4>Because you like:</h4>
        <span>{collection_type}</span>
      </div>
      <h3>{title}</h3>
    </MadeForYouCardTitleWrapper>
  </MadeForYouCardWrapper>
);

MadeForYouCard.propTypes = {
  index: PropTypes.number,
  cloudinary_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  collection_type: PropTypes.string.isRequired,
};

MadeForYouCard.defaultProps = {
  index: 0,
};

export default MadeForYouCard;
