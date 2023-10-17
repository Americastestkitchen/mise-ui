import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../Button';
import { color, letterSpacing, font, fontSize, spacing } from '../../../../styles';
import { Print } from '../../../DesignTokens/Icon/svgs';

const StyledActionButton = styled(Button)`
  align-items: center;
  display: inline-flex;
  font: ${fontSize.sm}/${fontSize.sm} ${font.pnb} 700;
  height: 3.5rem;
  justify-content: center;
  letter-spacing: ${letterSpacing.md};

  svg {
    height: 1.67rem;
    margin-right: ${spacing.xsm};
    margin-top: 0.125rem;
  }
`;

const determineIconType = (iconType) => {
  const iconTypes = {
    print: Print,
  };
  const El = iconTypes[iconType];
  return El && <El fill={color.white} />;
};

function ActionIconButton({
  iconType,
  onClick,
  text,
}) {
  return (
    <StyledActionButton
      iconType={iconType}
      onClick={onClick}
    >
      { iconType && determineIconType(iconType) }
      <span>{text}</span>
    </StyledActionButton>
  );
}

ActionIconButton.propTypes = {
  iconType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

ActionIconButton.defaultProps = {
  onClick: () => {},
};

export default ActionIconButton;
