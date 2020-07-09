import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import { color, letterSpacing, font, fontSize, spacing } from '../../../styles';
import { ChevronThinDown, FavoriteRibbon, Folder } from '../../DesignTokens/Icon/svgs';

const StyledButton = styled(Button)`
  align-items: center;
  display: flex;
  height: 35px;
  font: ${fontSize.sm}/${fontSize.sm} ${font.pnb};
  letter-spacing: ${letterSpacing.md};
  justify-content: center;
  min-width: 16.3rem;
  text-transform: uppercase;
`;

const StyledFavoriteRibbon = styled(FavoriteRibbon)`
  height: 1.67rem;
  margin-right: ${spacing.xxsm};
  margin-top: 0.125rem;

  .outer-stroke {
    stroke: ${color.white};
  }

  [class*="ribbon"] {
    fill: transparent;
    transition: 0.1s all ease-in-out;
  }

  [class*="vertical-line"],
  [class*="horizontal-line"] {
    stroke: transparent;
  }
`;

function ActionButton({
  actionType,
  className,
  hasActioned,
  onClick,
  text,
}) {
  return (
    <StyledButton
      actionType={actionType}
      hasActioned={hasActioned}
    >
      <StyledFavoriteRibbon
        ariaHidden=""
        ariaLabel=""
        className={className}
        fill={color.white}
        onClick={onClick}
      />
      { text && hasActioned ? `${text}d` : text }
      { hasActioned && (
        <div>
          <Folder fill={color.white} />
          <ChevronThinDown fill={color.white} />
        </div>
      )}
    </StyledButton>
  );
}

ActionButton.propTypes = {
  actionType: PropTypes.oneOf(['print', 'favorite']).isRequired,
  className: PropTypes.string,
  hasActioned: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  className: '',
  hasActioned: true,
  onClick: () => {},
  text: 'Save',
};

export default ActionButton;
