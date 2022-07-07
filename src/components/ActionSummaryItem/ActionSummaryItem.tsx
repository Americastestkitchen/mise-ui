import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Comment, StarFull } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../styles';

const ActionSummaryTheme = {
  default: css`
    align-items: center;
    display: flex;
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};

    strong {
      font-family: ${font.pnb};
    }

    svg {
      height: 1.6rem;
      margin-right: ${spacing.xxsm};
      position: relative;
      top: -1px;
      width: 1.6rem;
    }

    &.icon--star {
      svg {
        height: 1.8rem;
        width: 1.8rem;
      }
    }
  `,
  atk: css`
    color: ${color.eclipse};

    svg path {
      fill: ${color.mint};
    }
  `,
  cco: css`
    color: ${color.black};

    svg path {
      fill: ${color.denim};
    }
  `,
  cio: css`
    color: ${color.cork};

    svg path {
      fill: ${color.emailHover};
    }
  `,
};

export type IconType = 'comment' | 'star';
export type DefaultActionIcon = {
  children: ReactNode | ReactNode[];
  icon?: IconType;
}
const ActionSummaryWrapper = styled.div`
  ${withThemes(ActionSummaryTheme)}
`;

const determineIconType = (icon: IconType) => {
  const icons = {
    comment: Comment,
    star: StarFull,
  };
  const El = icons[icon];
  return El && <El />;
};

export default function ActionSummaryItem({
  children,
  icon,
}: DefaultActionIcon) {
  return (
    <ActionSummaryWrapper className={`action-summary icon--${icon}`}>
      {icon && determineIconType(icon) }
      {children}
    </ActionSummaryWrapper>
  );
}
