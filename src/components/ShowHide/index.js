import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Plus } from '../DesignTokens/Icon/svgs';
import { font, fontSize, letterSpacing, spacing } from '../../styles';

const ShowHideDivWrapper = styled.div``;
const ShowHideFieldsetWrapper = styled.fieldset``;

const ShowHideButton = styled.button`
  align-items: center;
  border: none;
  display: flex;
  font: ${fontSize.md}/1 ${font.pnb};
  justify-content: space-between;
  letter-spacing: ${letterSpacing.md};
  margin: 0 0 ${spacing.xsm};
  padding: ${spacing.xsm} ${spacing.xxsm} ${spacing.xsm} 0;
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

function ShowHide({ children, isFieldset, isHidden, label }) {
  const [hidden, toggleHidden] = useState(isHidden);
  const ShowHideWrapper = isFieldset ? ShowHideFieldsetWrapper : ShowHideDivWrapper;
  return (
    <ShowHideWrapper>
      <ShowHideButton
        aria-controls={`show-hide--${label.split(' ').join('')}`}
        aria-expanded={!hidden}
        onClick={() => toggleHidden(!hidden)}
      >
        {
          isFieldset ? (
            <legend>{label}</legend>
          ) : label
        }
        <ShowHideSvgWrapper isExpanded={!hidden}>
          <Plus />
        </ShowHideSvgWrapper>
      </ShowHideButton>
      <ShowHideContent id={`show-hide--${label.split(' ').join('')}`} hidden={hidden ? true : null}>
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
  /** For accessability we need a fieldset version of this component. */
  isFieldset: PropTypes.bool,
  /** Sets initial state of the hidden content. */
  isHidden: PropTypes.bool,
  /** Clickable text that appears in button next to plus/minus icon. */
  label: PropTypes.string.isRequired,
};

ShowHide.defaultProps = {
  isFieldset: false,
  isHidden: false,
};

export default ShowHide;
