import React from 'react';
import styled, { css } from 'styled-components';

import { color, font, fontSize, lineHeight, mixins, withThemes } from '../../../styles';
import * as Icons from '../../DesignTokens/Icon';

const AffiliateLinkWrapperTheme = {
  default: css`
    display: inline-block;
    position: relative;
    white-space: nowrap;

    > img {
      display: block;
      margin: 0 auto;
      width: 10rem;
    }

    @media print {
      display: none;
    }
  `,
};

const AffiliateLinkWrapper = styled.div.attrs({
  className: 'partner-link',
})`${withThemes(AffiliateLinkWrapperTheme)}`;

const AffiliateLinkTheme = {
  default: css`
    background-color: ${color.dirtyLinen};
    border-radius: 3rem;
    color: ${color.rust};
    display: inline-block;
    font: ${fontSize.md}/${lineHeight.md} ${font.pnb};
    min-width: 16.2rem;
    padding: 1rem 2rem;
    position: relative;
    text-align: center;
    z-index: 1;
    ${mixins.truncate(null)}
    &:focus, &:active {
      ${mixins.focusIndicator()};
    }

    @media(hover: hover) {
      &:hover {
        background-color: ${color.palePink};
      }
    }

    svg {
      display: inline-block;
      fill: ${color.rust};
      height: 0.9rem;
      margin-left: 0.5rem;
      position: relative;
      top: 50%;
      width: 0.9rem;
    }
  `,
};

const AffiliateLinkEl = styled.div.attrs({
  className: 'partner-link__anchor',
})`${withThemes(AffiliateLinkTheme)}`;

type AffiliateFakeButtonProps = {
    text: string;
}

const AffiliateFakeButton = ({
  text,
}: AffiliateFakeButtonProps) => (
  <AffiliateLinkWrapper>
    <AffiliateLinkEl>
      {text}
      <Icons.TriangleRight />
    </AffiliateLinkEl>
  </AffiliateLinkWrapper>
);

export default AffiliateFakeButton;
