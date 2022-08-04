import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, withThemes, mixins } from '../../../../styles';
import { FavoriteRibbon } from '../../../DesignTokens/Icon';

const StyledFavoriteButtonTheme = {
  default: css`
    [class*="ribbon"] {
      fill: transparent;
      transition: 0.1s all ease-in-out;
    }

    [class*="vertical-line"],
    [class*="horizontal-line"] {
      stroke: transparent;
    }

    &:focus, &:active {
      ${mixins.focusIndicator(color.eclipse, '2px')};
    }

    @media(hover: hover) {
      &:hover {
        [class*="ribbon"] {
          fill: ${props => props.fill};
          transition: 0.1s all ease-in-out;
        }
      }
    }

    &.favorited {
      [class*="ribbon"] {
        fill: ${props => props.fill};
      }

      [class*="vertical-line"],
      [class*="horizontal-line"] {
        stroke: ${props => props.fill};
        transition: 0.1s all ease-in-out;
      }

      @media(hover: hover) {
        &:hover {
          [class*="horizontal-line"] {
            stroke: transparent;
            transition: 0.1s all ease-in-out;
          }

          [class*="vertical-line"] {
            stroke: ${props => props.fill};
          }
        }
      }
    }
  `,
  dark: css`
    .outer-stroke {
      stroke: ${color.white};
    }

    @media(hover: hover) {
      &:hover {
        [class*="ribbon"] {
          fill: ${color.white};
          transition: 0.1s all ease-in-out;
        }
      }
    }

    &.favorited {
      [class*="ribbon"] {
        fill: ${color.white};
      }

      [class*="vertical-line"],
      [class*="horizontal-line"] {
        stroke: ${color.white};
        transition: 0.1s all ease-in-out;
      }

      @media(hover: hover) {
        &:hover {
          [class*="horizontal-line"] {
            stroke: transparent;
            transition: 0.1s all ease-in-out;
          }

          [class*="vertical-line"] {
            stroke: ${color.white};
          }
        }
      }
    }
  `,
};

const StyledFavoriteButton = styled.button`
  ${withThemes(StyledFavoriteButtonTheme)}
`;

const FavoriteButton = ({
  className,
  fill,
  isFavorited,
  objectId,
  siteKey,
  title,
}) => (
  <StyledFavoriteButton
    aria-label={isFavorited ? `Remove ${title} from favorites` : `Save ${title} to favorites`}
    aria-pressed={isFavorited}
    className={`${className} favorite-action ${isFavorited ? 'favorited' : ''}`}
    data-document-title={title}
    data-favoritable-id={objectId}
    data-origin-site={siteKey}
    data-testid="favorite-button"
    fill={fill}
  >
    <FavoriteRibbon
      ariaHidden
      ariaLabel=" "
      className="favorite-ribbon"
      fill={fill}
    />
  </StyledFavoriteButton>
);

FavoriteButton.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  isFavorited: PropTypes.bool,
  objectId: PropTypes.string.isRequired,
  siteKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FavoriteButton.defaultProps = {
  className: '',
  fill: `${color.eclipse}`,
  isFavorited: false,
};

export default FavoriteButton;
