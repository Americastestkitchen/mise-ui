import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Lock, VideoPlay } from '../DesignTokens/Icon/index';
import { color, fontSize, font, grid, lineHeight, spacing } from '../../styles';
import { getImageUrl } from '../../lib/cloudinary';

const ListableWrapper = styled.div`
  display: flex;
  max-width: ${grid.columnWidth};
  width: ${grid.columnWidth};

  &:hover {
    cursor: pointer;
  }
`;

const ListableImage = styled.img`
  height: 7rem;
  width: 12rem;
`;

const ListableBody = styled.div`
  ${({ isSelected }) => (isSelected ? `background-color: ${color.eclipse};` : '')}
  display: flex;
  flex-direction: column;
  padding: ${spacing.xsm};
`;

const ListableTitle = styled.h3`
  color: ${color.white};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};

  svg {
    height: 1rem;
    margin-right: ${spacing.xxsm};
    width: 0.8rem;
  }

  &:hover {
    color: ${color.silver};
  }
`;

const ListableDuration = styled.span`
  color: ${color.nobel};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};

  svg {
    margin-right: ${spacing.xxsm};
    max-height: 1rem;
    max-width: 1rem;
  }
`;

const Listable = ({ cloudinaryId, duration, hasAccess, isSelected, title }) => (
  <ListableWrapper>
    <ListableImage
      alt=" "
      src={getImageUrl(cloudinaryId, { height: 70, width: 122 })}
    />
    <ListableBody isSelected={isSelected} data-testid="listable-body">
      <ListableTitle>
        {
          !hasAccess && (
            <Lock
              fill={color.white}
            />
          )
        }
        {title}
      </ListableTitle>
      <ListableDuration>
        <VideoPlay fill={color.nobel} />
        {duration}
      </ListableDuration>
    </ListableBody>
  </ListableWrapper>
);

Listable.propTypes = {
  cloudinaryId: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  hasAccess: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Listable.defaultProps = {
  isSelected: false,
};

export default Listable;
