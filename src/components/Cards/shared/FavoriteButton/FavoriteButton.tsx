import React from 'react';
import styled, { css } from 'styled-components';
import { color, withThemes } from '../../../../styles';
import type { ColorName } from '../../../../styles/colors';
import { FavoriteRibbon } from '../../../DesignTokens/Icon';

const StyledFavoriteButtonTheme = {
  default: css<{fill: ColorName}>`
    [class*="ribbon"] {
      fill: transparent;
      transition: 0.1s all ease-in-out;
    }

    [class*="vertical-line"],
    [class*="horizontal-line"] {
      stroke: transparent;
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

const StyledFavoriteButton = styled.button<{fill: ColorName}>`
  ${withThemes(StyledFavoriteButtonTheme)}
`;

type FavoriteButtonPropTypes = {
  className?: string,
  fill?: ColorName,
  isFavorited?: boolean,
  objectId: string,
  siteKey: string,
  title: string,
}

const FavoriteButton = ({
  className = '',
  fill,
  isFavorited,
  objectId,
  siteKey,
  title,
}: FavoriteButtonPropTypes) => (
  <StyledFavoriteButton
    aria-label={isFavorited ? `Remove ${title} from favorites` : `Save ${title} to favorites`}
    aria-pressed={isFavorited}
    className={`${className} favorite-action ${isFavorited ? 'favorited' : ''}`}
    data-document-title={title}
    data-favoritable-id={objectId}
    data-origin-site={siteKey}
    data-testid="favorite-button"
    fill={fill || color.eclipse}
  >
    <FavoriteRibbon
      ariaHidden
      ariaLabel=" "
      className="favorite-ribbon"
      fill={fill}
    />
  </StyledFavoriteButton>
);

export default FavoriteButton;
