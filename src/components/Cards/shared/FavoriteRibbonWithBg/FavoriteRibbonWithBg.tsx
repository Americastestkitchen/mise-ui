import React from 'react';
import styled from 'styled-components';
import { color } from '../../../../styles';
import { FavoriteRibbonWithBg } from '../../../DesignTokens/Icon';

const StyledFavoriteButtonWithBg = styled.button`
  .favorite-hover {
    display: none;
  }

  &:hover {
    .is-favorited path {
      fill: #fff;
    }
    .favorite-hover {
      display: block;
    }
  }

  &.favorited {
    .is-favorited path {
      fill: #fff;
    }

    .favorite-hover .only-minus {
      display: none;
    }
  }
`;

type FavoriteButtonWithBgPropTypes = {
    className?: string,
    fill?: string,
    isFavorited?: boolean,
    objectId: string,
    siteKey: string,
    title: string,
}

const FavoriteButtonWithBg = ({
  className = '',
  fill = color.eclipse,
  isFavorited = false,
  objectId,
  siteKey,
  title,
}: FavoriteButtonWithBgPropTypes) => (
  <StyledFavoriteButtonWithBg
    aria-label={isFavorited ? `Remove ${title} from favorites` : `Save ${title} to favorites`}
    aria-pressed={isFavorited}
    className={`${className} favorite-action-bg ${isFavorited ? 'favorited' : ''}`}
    data-document-title={title}
    data-favoritable-id={objectId}
    data-origin-site={siteKey}
    data-testid="favorite-button"
    fill={fill}
  >
    <FavoriteRibbonWithBg
      ariaLabel=""
      fill={fill}
    />
  </StyledFavoriteButtonWithBg>
);

export default FavoriteButtonWithBg;
