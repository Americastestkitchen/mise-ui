import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, spacing } from '../../../../styles';
import { FavoriteRibbon } from '../../../DesignTokens/Icon';

const StyledFavoriteButton = styled.button`
  flex-shrink: 0;
  margin-top: -${spacing.xxsm};
  padding: ${spacing.xsm} 0 ${spacing.xsm} ${spacing.xsm};
  stroke: currentColor;
  fill: transparent;

  [class*="ribbon"] {
    fill: transparent;
    transition: .1s all ease-in-out;
  }

  &:hover {
    [class*="ribbon"] {
      fill: ${color.eclipse};
    }
  }

  [class*="vertical-line"],
  [class*="horizontal-line"] {
    stroke: ${color.white};
  }

  &.favorited {
    [class*="ribbon"] {
      fill: ${color.eclipse};
    }

    [class*="vertical-line"],
    [class*="horizontal-line"] {
      stroke: ${color.eclipse};
    }

    &:hover {
      [class*="horizontal-line"] {
        stroke: ${color.white};
      }

      [class*="vertical-line"] {
        stroke: ${color.eclipse};
      }
    }
  }
`;

const FavoriteButton = ({
  objectId,
  onClick,
  siteKey,
  title,
}) => (
  <StyledFavoriteButton
    ariaLabel={'Save to favorites'}
    className="favorite-action"
    data-document-title={title}
    data-favoritable-id={objectId}
    data-origin-site={siteKey}
    onClick={onClick}
  >
    <FavoriteRibbon
      ariaHidden="true"
      className="favorite-ribbon"
    />
  </StyledFavoriteButton>
);

FavoriteButton.propTypes = {
  objectId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  siteKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FavoriteButton.defaultProps = {
  onClick: null,
};

export default FavoriteButton;
