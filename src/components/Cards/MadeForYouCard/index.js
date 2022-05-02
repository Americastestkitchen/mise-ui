/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font, fontSize } from '../../../styles';

const MadeForYouCardWrapper = styled.a`
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
  padding: 40px 20px;

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
    height: 90px;
    width: 213px;
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
  url,
}) => (
  <MadeForYouCardWrapper href={url} title={title} className="made-for-you-card">
    <img src={cloudinary_url} alt={title} />
    <MadeForYouCardTitleWrapper style={{ backgroundColor: getBgColor(index) }}>
      <h3>{title}</h3>
    </MadeForYouCardTitleWrapper>
  </MadeForYouCardWrapper>
);

MadeForYouCard.propTypes = {
  index: PropTypes.number,
  cloudinary_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

MadeForYouCard.defaultProps = {
  index: 0,
};

export default MadeForYouCard;
