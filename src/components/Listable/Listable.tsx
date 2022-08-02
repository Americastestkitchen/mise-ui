import React from 'react';
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

    .listable__title {
      color: ${color.silver};
    }
  }

  &.completed {
    border-bottom: 4px solid ${color.mint};
  }
`;

const ListableImage = styled.img.attrs({
  className: 'listable__image',
})`
  background-color: ${color.eclipse};
  height: 7rem;
  width: 12rem;
`;

const ListableBody = styled.div`
  display: flex;
  flex: 1 0 calc(100% - 12rem);
  flex-direction: column;
  padding: ${spacing.xsm};

  &.selected {
    background-color: ${color.eclipse};
  }
`;

const ListableTitle = styled.h3.attrs({
  className: 'listable__title',
})`
  color: ${color.white};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};

  svg {
    height: 1rem;
    margin-right: ${spacing.xxsm};
    width: 0.8rem;
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

export type ListableProps = {
  cloudinaryId: string;
  duration: string;
  hasAccess: boolean;
  isCompleted?: boolean;
  isSelected?: boolean;
  title: string;
};

const Listable = ({
  cloudinaryId,
  duration,
  hasAccess,
  isCompleted = false,
  isSelected = false,
  title,
}: ListableProps) => (
  <ListableWrapper
    className={`listable ${isCompleted ? 'completed' : ''}`}
  >
    <ListableImage
      alt=""
      src={getImageUrl(cloudinaryId, { height: 70, width: 122 })}
    />
    <ListableBody
      className={`listable__body ${isSelected ? 'selected' : ''}`}
      data-testid="listable-body"
    >
      <ListableTitle>
        {!hasAccess && (
          <Lock fill={color.white} />
        )}
        {title}
      </ListableTitle>
      <ListableDuration>
        <VideoPlay fill={color.nobel} />
        {duration}
      </ListableDuration>
    </ListableBody>
  </ListableWrapper>
);

export default Listable;
