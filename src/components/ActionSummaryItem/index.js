import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import { Comment, StarFull } from '../DesignTokens/Icon/svgs';
import { color, font, fontSize, lineHeight, spacing, withThemes } from '../../styles';

const iconMap = {
  comment: Comment,
  star: StarFull,
};

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
      fill: ${color.darkTeal};
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
  play: css`
    svg path {
      fill: ${color.mint};
    }
  `,
};

const ActionSummaryWrapper = styled.div.attrs({
  className: 'action-summary',
})`
  ${withThemes(ActionSummaryTheme)}
`;

const ActionSummaryItem = ({
  children,
  icon,
  label,
}) => {
  const ActionIcon = iconMap[icon];
  return (
    <ActionSummaryWrapper className={`icon--${icon}`}>
      {ActionIcon && <ActionIcon ariaLabel={label} />}
      {children}
    </ActionSummaryWrapper>
  );
};

ActionSummaryItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};

ActionSummaryItem.defaultProps = {
  icon: null,
  label: null,
};

export default ActionSummaryItem;
