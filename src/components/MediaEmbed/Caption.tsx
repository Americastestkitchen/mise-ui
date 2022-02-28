import React from 'react';
import styled, { css } from 'styled-components';
import { font, color, withThemes } from '../../styles';

const DescriptionWrapper = styled.div`
  padding-top: 16px;
`;

const Description = styled.span`
  font-family: ${font.pnb};
  font-size: 16px;
  line-height: 1.5;
  color: ${color.doveGray};
`;

const AccentRectangle = styled.div`
  width: 19.5px;
  height: 7px;
  margin-top: 8px;
  ${withThemes({
    default: css`background-color: ${color.mint};`,
    atk: css`background-color: ${color.mint};`,
    cco: css`background-color: ${color.denim};`,
    cio: css`background-color: ${color.squirrel};`,
  })}
`;

export default function Caption({ caption }: { caption?: string }) {
  return caption ? (
    <DescriptionWrapper>
      <Description>
        {caption}
      </Description>
      <AccentRectangle />
    </DescriptionWrapper>
  ) : null;
}
