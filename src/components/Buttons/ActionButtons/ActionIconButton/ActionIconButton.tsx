import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import { color, letterSpacing, font, fontSize, spacing } from '../../../../styles';
import { Print } from '../../../DesignTokens/Icon/svgs';

export type IconType = 'print';

export type IconProps = {
  iconType: IconType;
  onClick(): void;
  text: string;
}
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

const determineIconType = (iconType: IconType) => {
  const iconTypes = {
    print: Print,
  };
  const El = iconTypes[iconType];
  return El && <El fill={color.white} />;
};

export default function ActionIconButton({
  iconType,
  onClick,
  text,
}: IconProps) {
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
