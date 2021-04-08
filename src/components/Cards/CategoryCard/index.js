import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import IconMap from './iconMap';
import Image from '../shared/Image';
import { color, font, fontSize } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';

const CarouselContainer = styled.div`
    height: 12.5rem;  
`;

const LinkToBrowse = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 11.8rem;
  justify-content: center;
  width: 9.4rem;

  ${breakpoint('xlg')`
    &:hover {
      background-color: ${color.white};
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
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
  documentType,
  filterName,
  filterValue,
  lazy,
  onClick,
  svgId,
  tagline,
}) => {
  const CategoryIcon = IconMap?.[svgId] || IconMap.star;

  return (
    <CarouselContainer>
      <LinkToBrowse
        className="category-card-link"
        data-document-type={documentType}
        data-filter-name={filterName}
        data-filter-value={filterValue}
        href={`${browsePath}`}
        onClick={onClick}
      >
        <ImageWrapper>
          {assetType === 'productImage'
            ? (
              <Image
                className="category-product-image"
                imageAlt={tagline}
                imageUrl={getImageUrl(cloudinaryId)}
                lazy={lazy}
              />
            ) : (
              <SvgWrapper>
                <CategoryIcon fill={color.mint} />
              </SvgWrapper>
            )}
        </ImageWrapper>
        <Tagline>
          {tagline}
        </Tagline>
      </LinkToBrowse>
    </CarouselContainer>
  );
};

CategoryCard.propTypes = {
  assetType: PropTypes.oneOf(['productImage', 'svgIcon']).isRequired,
  browsePath: PropTypes.string.isRequired,
  cloudinaryId: PropTypes.string,
  documentType: PropTypes.string,
  filterName: PropTypes.string,
  filterValue: PropTypes.string,
  lazy: PropTypes.bool,
  onClick: PropTypes.func,
  svgId: PropTypes.oneOf(['shoppingCart', 'star', 'trendingArrow', 'play', '']),
  tagline: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {
  cloudinaryId: '',
  documentType: null,
  lazy: true,
  filterName: null,
  filterValue: null,
  onClick: null,
  svgId: 'star',
};

export default CategoryCard;
