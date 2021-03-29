import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import IconMap from './iconMap';
import Image from '../shared/Image';
import { color, font, fontSize } from '../../../styles';

const LinkToBrowse = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 11.8rem;
  justify-content: center;
  width: 9.4rem;

  ${breakpoint('xlg')`
    &:hover {
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      background-color: ${color.white};
    }
  `}  
`;

const ImageWrapper = styled.div`
  align-items: center;
  background-color: ${color.frost};
  border-radius: 50%;
  display: flex;
  height: 6rem;
  justify-content: center;
  margin-bottom: 10%;
  width: 6rem;
`;

const Tagline = styled.p`
  font: ${fontSize.sm} ${font.pnr};
  height: 3rem;
  line-height: 1.14;
  text-align: center;
  width: 7rem;
`;

const SvgWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 60%;
    position: relative;
    width: 60%;

    .landing-play-icon {
        position: absolute;
        left: 2%;
    }

    .shopping-cart-icon {
        position: absolute;
        right: 9%;
    }

    .star-icon {
        position: absolute;
        left: 5%;
        top: 1%;
    }
`;

const CategoryCard = ({
  assetType,
  browsePath,
  cloudinaryId,
  svgId,
  tagline,
}) => {
  const CategoryIcon = IconMap?.[svgId] || IconMap.star;

  return (
    <LinkToBrowse
      href={browsePath}
    >
      <ImageWrapper>
        {assetType === 'productImage' ? <Image className="category-product-image" imageAlt={tagline} imageUrl={cloudinaryId} /> : (
          <SvgWrapper>
            <CategoryIcon fill={color.mint} />
          </SvgWrapper>
        )}

      </ImageWrapper>
      <Tagline>
        {tagline}
      </Tagline>
    </LinkToBrowse>
  );
};

CategoryCard.propTypes = {
  assetType: PropTypes.oneOf(['productImage', 'svgIcon']).isRequired,
  browsePath: PropTypes.string.isRequired,
  cloudinaryId: PropTypes.string,
  svgId: PropTypes.oneOf(['shoppingCart', 'star', 'trendingArrow', 'play', '']),
  tagline: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {
  cloudinaryId: '',
  svgId: 'star',
};

export default CategoryCard;
