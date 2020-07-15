import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button';
import { color, letterSpacing, font, fontSize, spacing } from '../../../../styles';
import { Print } from '../../../DesignTokens/Icon/svgs';

const StyledActionButton = styled(Button)`
  align-items: center;
  display: inline-flex;
  font: ${fontSize.sm}/${fontSize.sm} ${font.pnb};
  height: 3.5rem;
  justify-content: center;
  letter-spacing: ${letterSpacing.md};

  svg {
    height: 1.67rem;
    margin-right: ${spacing.xsm};
    margin-top: 0.125rem;
  }
`;

const determineIconType = (actionType) => {
  const actionTypes = {
    print: Print,
  };
  const El = actionTypes[actionType];
  return El && <El fill={color.white} />;
};

function ActionIconButton({
  actionType,
  onClick,
  text,
}) {
  return (
    <StyledActionButton
      actionType={actionType}
      onClick={onClick}
    >
      { actionType && determineIconType(actionType) }
      <span>{text}</span>
    </StyledActionButton>
  );
}

ActionIconButton.propTypes = {
  actionType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

ActionIconButton.defaultProps = {
  onClick: () => {},
};

export default ActionIconButton;
