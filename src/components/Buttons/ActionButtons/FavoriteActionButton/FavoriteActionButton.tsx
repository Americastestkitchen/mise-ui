import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button/Button';
import { color, letterSpacing, font, fontSize, spacing } from '../../../../styles';
import { ChevronThinDown, FavoriteRibbon, Folder } from '../../../DesignTokens/Icon/svgs';

const ButtonWrapper = styled.div.attrs({
  className: 'favorite-action-wrapper',
})`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0;
  text-transform: uppercase;
  width: 16.3rem;
`;

const StyledFavoriteRibbon = styled(FavoriteRibbon)<{onClick(): void}>``;

const StyledButton = styled(Button)`
  align-items: center;
  display: inline-flex;
  font: ${fontSize.sm}/${fontSize.sm} ${font.pnb};
  height: 3.5rem;
  justify-content: center;
  letter-spacing: ${letterSpacing.md};

  em {
    display: none;
    font-style: normal;
  }

  &.favorite-action,
  &.favorite-manage {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  &.favorite-action {
    flex: 1;
  }

  &.favorite-manage {
    background: ${color.mint};
    flex-basis: 6rem;
  }

  &.favorited {
    ${StyledFavoriteRibbon} {
      fill: white;

      [class*="vertical-line"],
      [class*="horizontal-line"] {
        stroke: white;
      }
    }

    em {
      display: inline;
    }
  }

  ${StyledFavoriteRibbon} {
    height: 1.67rem;
    fill: ${({ isFavorited }) => (isFavorited ? 'white' : 'transparent')};
    margin-right: ${spacing.xxsm};
    margin-top: 0.125rem;

    [class*="vertical-line"],
    [class*="horizontal-line"] {
      stroke: ${({ isFavorited }) => (isFavorited ? 'white' : 'transparent')};
    }

    .outer-stroke {
      stroke: ${color.white};
    }
  }
`;

const StyledFolder = styled(Folder)`
  margin-right: ${spacing.xsm};
`;
export type DefaultFavoriteActionButton = React.ComponentPropsWithoutRef<'button'> & {
  className?: string;
  favoritableId?: string;
  isFavorited?: boolean;
  onClick(): void;
  title?: string;
}

export default function FavoriteActionButton({
  className,
  favoritableId,
  isFavorited = false,
  onClick,
  title,
}: DefaultFavoriteActionButton) {
  return (
    <ButtonWrapper>
      <StyledButton
        data-favoritable-id={favoritableId}
        data-document-title={title}
        className="favorite-action"
        isFavorited={isFavorited}
      >
        <StyledFavoriteRibbon
          ariaHidden
          ariaLabel=""
          className={className}
          fill={color.white}
          onClick={onClick}
        />
        <span>Save<em data-testid="saved">d</em></span>
      </StyledButton>
      { isFavorited && (
        <StyledButton
          className="favorite-manage"
        >
          <StyledFolder
            ariaLabel=""
            className={className}
            fill={color.white}
          />
          <ChevronThinDown
            ariaLabel="Add to custom collection"
            fill={color.white}
          />
        </StyledButton>
      )}
    </ButtonWrapper>
  );
}
