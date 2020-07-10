import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button';
import { color, letterSpacing, font, fontSize, spacing } from '../../../../styles';
import { ChevronThinDown, FavoriteRibbon, Folder } from '../../../DesignTokens/Icon/svgs';

const StyledFavoriteRibbon = styled(FavoriteRibbon)`
  height: 1.67rem;
  margin-right: ${spacing.xxsm};
  margin-top: 0.125rem;

  .outer-stroke {
    stroke: ${color.white};
  }

  [class*="ribbon"] {
    transition: 0.1s all ease-in-out;
  }

  [class*="vertical-line"],
  [class*="horizontal-line"] {
    stroke: transparent;
  }
`;

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
    fill: ${({ isFavorited }) => (isFavorited ? color.white : 'transparent')};
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
    <StyledButton
      isFavorited={isFavorited}
    >
      <div className="left-wrapper">
        <StyledFavoriteRibbon
          ariaHidden="true"
          className={className}
          fill={color.white}
          onClick={onClick}
        />
        { isFavorited ? 'Saved' : 'Save' }
      </div>
      { isFavorited && (
        <div className="right-wrapper">
          <StyledFolder
            className={className}
            fill={color.white}
          />
          <ChevronThinDown fill={color.white} />
        </div>
      )}
    </StyledButton>
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
