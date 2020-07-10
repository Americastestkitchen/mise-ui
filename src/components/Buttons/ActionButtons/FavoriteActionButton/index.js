import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button';
import { color, letterSpacing, font, fontSize, spacing } from '../../../../styles';
import { ChevronThinDown, FavoriteRibbon, Folder } from '../../../DesignTokens/Icon/svgs';

const StyledFavoriteRibbon = styled(FavoriteRibbon)``;

const StyledButton = styled(Button)`
  align-items: center;
  display: flex;
  height: 35px;
  font: ${fontSize.sm}/${fontSize.sm} ${font.pnb};
  letter-spacing: ${letterSpacing.md};
  justify-content: center;
  min-width: 16.3rem;
  padding: 0;
  text-transform: uppercase;

  .left-wrapper,
  .right-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-wrapper {
    flex: 1;
    padding: 0 ${spacing.md};
  }

  .right-wrapper {
    background: ${color.mint};
    height: 100%;
    padding: 0 ${spacing.sm};
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
    <>
      <StyledButton
        isFavorited={isFavorited}
      >
        <div className="left-wrapper">
          <StyledFavoriteRibbon
            ariaHidden
            ariaLabel=""
            className={className}
            fill={color.white}
            onClick={onClick}
          />
          { isFavorited ? 'Saved' : 'Save' }
        </div>
        { isFavorited && (
          <div className="right-wrapper">
            <StyledFolder
              ariaLabel=""
              className={className}
              fill={color.white}
            />
            <ChevronThinDown
              ariaLabel="Add to custom collection"
              fill={color.white}
            />
          </div>
        )}
      </StyledButton>
    </>
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
