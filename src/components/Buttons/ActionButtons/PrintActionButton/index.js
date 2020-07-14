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

  svg {
    height: 1.67rem;
    margin-right: ${spacing.xxsm};
    margin-top: 0.125rem;
  }
`;

const determineIconType = (actionType) => {
  const actionTypes = {
    print: Print,
  };
  const El = actionTypes[actionType];
  return El ? <El fill={`${color.white}`} /> : null;
};

function PrintActionButton({
  actionType,
  onClick,
  text,
}) {
  return (
    <StyledActionButton
      actionType={actionType}
      onClick={onClick}
    >
      { determineIconType(actionType) }
      <span>{text}</span>
    </StyledActionButton>
  );
}

PrintActionButton.propTypes = {
  actionType: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

PrintActionButton.defaultProps = {
  actionType: 'print',
  onClick: () => {},
  text: 'Print',
};

export default PrintActionButton;
