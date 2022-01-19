import React from 'react';
import styled, { css } from 'styled-components';
import { Carousel } from './styled-elements';

export type ArgsProps = {
  maxCardCount: number;
  cardWidthPx: number;
  cardMarginRightPx: number;
}

const CarouselWrapperSC = styled.div<ArgsProps>`
  &, ${Carousel} {
    ${({ maxCardCount, cardWidthPx, cardMarginRightPx }) => css`
      max-width: calc((${maxCardCount} * ${cardWidthPx}px) + (${maxCardCount - 1} * ${cardMarginRightPx}px));
    `}
  }
`;

export function CarouselWidthWrapper({
  maxCardCount,
  cardWidthPx,
  cardMarginRightPx,
  children,
}: React.PropsWithChildren<ArgsProps>) {
  return (
    <CarouselWrapperSC {... { maxCardCount, cardWidthPx, cardMarginRightPx }}>
      {children}
    </CarouselWrapperSC>
  );
}
