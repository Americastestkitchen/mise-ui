import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import IconMap from './iconMap';
import Image from '../shared/Image';
import { color, font, fontSize, mixins, withThemes } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';

const CarouselContainer = styled.div`
  height: 12.5rem;
  margin-right: 0.5rem;
`;

const LinkToBrowseTheme = {
  default: css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 11.8rem;
    justify-content: center;
    width: 9.4rem;

    .product-img-wrapper {
      background-color: transparent;
    }

    &:focus {
      ${mixins.focusIndicator(color.eclipse, '-5px')}
    }

    ${breakpoint('xlg')`
      &:hover {
        background-color: ${color.white};
        border-radius: 8px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      }
    `}
  `,
  atk: css`
    .product-img-wrapper {
      background-color: ${color.frost};
    }

    .svg-wrapper {
      background-color: ${color.frost};

      &.recipes {
        background-color: ${color.darkTeal};
      }
    }
  `,
  cio: css`
    .product-img-wrapper {
      background-color: ${color.pearlBush};
    }

    .svg-wrapper {
      background-color: ${color.squirrel};
    }
  `,
  cco: css`
    .product-img-wrapper {
      background-color: ${color.alabaster};
    }

    .recipes {
      outline: 1px solid ${color.queenBlue};
      outline-offset: 3px;
    }

    .svg-wrapper {
      background-color: ${color.queenBlue};
    }
  `,
};

const LinkToBrowse = styled.a.attrs({
  className: 'browse-link',
})`
  ${withThemes(LinkToBrowseTheme)}
`;

const ImageWrapperTheme = {
  default: css`
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 6rem;
    justify-content: center;
    margin-bottom: 10%;
    width: 6rem;
  `,
  atk: css`
    .svg-reviews {
      svg path {
        fill: ${color.mint};
      }
    }
    .svg-recipes {
      svg path {
        fill: ${color.white};
      }
    }
  `,
  cio: css`
    svg path {
      fill: ${color.white};
    }
  `,
  cco: css`
    svg path {
      fill: ${color.white};
    }
    .rooster {
      svg {
        path:nth-child(2n+1) {
          fill: none;
        }
      }
    }
  `,
};

const ImageWrapper = styled.div.attrs({
  className: 'image-wrapper',
})`
  ${withThemes(ImageWrapperTheme)}
`;

const TaglineWrapperTheme = {
  default: css`
    font-size: ${fontSize.sm};
    height: 3rem;
    line-height: 16px;
    text-align: center;
    width: 8rem;
  `,
  atk: css`
    color: ${color.eclipse};
    font-family: ${font.pnr};
  `,
  cio: css`
    color: ${color.cork};
    font-family: ${font.mwr};
  `,
  cco: css`
    color: ${color.black};
    font-family: ${font.clb};
  `,
};

const Tagline = styled.p.attrs({
  className: 'tagline',
})`
  ${withThemes(TaglineWrapperTheme)}
`;

const SvgWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 50%;
  position: relative;
  width: 50%;

  .landing-play-icon {
    position: absolute;
  }

  .reviews-ribbon {
    position: absolute;
    width: 100%;
  }

  .shopping-cart-icon {
    position: absolute;
    left: -4%; 
  }

  .trending-icon {
    width: 100%;
  }

  &.recipeCard {
    width: 62%;
  }

  &.latest, &.cookbook {
    width: 64%;
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
  page,
  svgId,
  tagline,
}) => {
  const CategoryIcon = IconMap?.[svgId] || IconMap.reviews;
  const backgroundClass = cloudinaryId
    ? 'product-img-wrapper'
    : 'svg-wrapper';

  return (
    <CarouselContainer>
      <LinkToBrowse
        className="category-card-link"
        data-document-type={documentType}
        data-filter-name={filterName}
        data-filter-value={filterValue}
        data-title={tagline}
        data-type={documentType}
        href={`${browsePath}`}
        onClick={onClick}
      >
        <ImageWrapper className={`${backgroundClass} ${page}`}>
          {assetType === 'productImage' ? (
            <Image
              className="category-product-image"
              height={60}
              imageAlt=""
              imageUrl={getImageUrl(cloudinaryId, 'thumbnail', { size: 'small' })}
              lazy={lazy}
              width={60}
            />
          ) : (
            <SvgWrapper className={`svg-${page} ${svgId}`}>
              <CategoryIcon />
            </SvgWrapper>
          )}
        </ImageWrapper>
        <Tagline>{tagline}</Tagline>
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
  page: PropTypes.oneOf(['reviews', 'recipes']),
  svgId: PropTypes.oneOf([
    'cookbook',
    'latest',
    'recipeCard',
    'reviews',
    'rooster',
    'shoppingCart',
    'star',
    'trendingArrow',
    'play',
    '',
  ]),
  tagline: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {
  cloudinaryId: '',
  documentType: null,
  lazy: true,
  filterName: null,
  filterValue: null,
  onClick: null,
  page: 'reviews',
  svgId: 'star',
};

export default CategoryCard;
