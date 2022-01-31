import React from 'react';
import PropTypes from 'prop-types';
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

const FavoriteButtonWithBg = ({
  className,
  fill,
  isFavorited,
  objectId,
  title,
}) => (
  <StyledFavoriteButtonWithBg
    aria-label={isFavorited ? `Remove ${title} from favorites` : `Save ${title} to favorites`}
    aria-pressed={isFavorited}
    className={`${className} favorite-action-bg ${isFavorited ? 'favorited' : ''}`}
    data-document-title={title}
    data-favoritable-id={objectId}
    data-testid="favorite-button"
    fill={fill}
  >
    <FavoriteRibbonWithBg
      ariaHidden
      ariaLabel=""
      fill={fill}
    />
  </StyledFavoriteButtonWithBg>
);

FavoriteButtonWithBg.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  isFavorited: PropTypes.bool,
  objectId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FavoriteButtonWithBg.defaultProps = {
  className: '',
  fill: `${color.eclipse}`,
  isFavorited: false,
};

export default FavoriteButtonWithBg;
