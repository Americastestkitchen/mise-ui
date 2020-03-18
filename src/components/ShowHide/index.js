import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Plus } from '../DesignTokens/Icon/svgs/';
import { font, fontSize, letterSpacing } from '../../styles';

const ShowHideWrapper = styled.div`
  max-width: 20rem;
`;

const ShowHideButton = styled.button`
  align-items: center;
  border: none;
  display: flex;
  font: ${fontSize.md}/1 ${font.pnb};
  justify-content: space-between;
  letter-spacing: ${letterSpacing.md};
  margin: 0 0 1.6rem;
  padding: 0;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const ShowHideSvgWrapper = styled.div`
  height: 2rem;
  max-height: 2rem;
  max-width: 2rem;
  width: 2rem;

  svg {
    height: 100%;
    transition: all .2s ease;
    width: 100%;

    ${({ isExpanded }) => (isExpanded ? `
      transform: rotate(90deg);

      rect {
        &:first-child {
          opacity: 0;
        }
      }
    ` : '')}
  }
`;

const ShowHideContent = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;

export function ShowHide({ children, label, isHidden }) {
  const [hidden, toggleHidden] = useState(isHidden);
  return (
    <ShowHideWrapper>
      <ShowHideButton onClick={() => { toggleHidden(!hidden) }}>
        {label}
        <ShowHideSvgWrapper isExpanded={!hidden}>
          <Plus />
        </ShowHideSvgWrapper>
      </ShowHideButton>
      <ShowHideContent hidden={hidden}>
        {children}
      </ShowHideContent>
    </ShowHideWrapper>
  );
}

ShowHide.propTypes = {
  /** Content that will be hidden by expand collapse behavior. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** Sets initial state of the hidden content. */
  isHidden: PropTypes.bool,
  /** Clickable text that appears in button next to plus/minus icon. */
  label: PropTypes.string.isRequired,
};

ShowHide.defaultProps = {
  isHidden: false,
};

export default ShowHide;
