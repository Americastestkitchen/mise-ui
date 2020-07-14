import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button';
import { color, letterSpacing, font, fontSize, spacing } from '../../../../styles';
import { ChevronThinDown, FavoriteRibbon, Folder } from '../../../DesignTokens/Icon/svgs';

const ButtonWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0;
  text-transform: uppercase;
  width: 16.3rem;
`;

const StyledFavoriteRibbon = styled(FavoriteRibbon)``;

const StyledButton = styled(Button)`
  align-items: center;
  display: inline-flex;
  font: ${fontSize.sm}/${fontSize.sm} ${font.pnb};
  height: 3.5rem;
  justify-content: center;
  letter-spacing: ${letterSpacing.md};

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

function FavoriteActionButton({
  className,
  isFavorited,
  onClick,
}) {
  return (
    <ButtonWrapper>
      <StyledButton
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
        { isFavorited ? 'Saved' : 'Save' }
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

FavoriteActionButton.propTypes = {
  className: PropTypes.string,
  isFavorited: PropTypes.bool,
  onClick: PropTypes.func,
};

FavoriteActionButton.defaultProps = {
  className: '',
  isFavorited: false,
  onClick: () => {},
};

export default FavoriteActionButton;
