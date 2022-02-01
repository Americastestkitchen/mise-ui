import React from 'react';
import styled, { css } from 'styled-components';
import { untilLg } from '../../../styles/breakpoints';
import { Carousel } from './styled-elements';

const cssAuto = css`
  ${untilLg(css`
    --side-margin: calc((100vw - 100%) / 2);
    width: calc(100% + var(--side-margin, calc((100vw - 100%) / 2)));
    margin-right: calc(-1 * var(--side-margin, calc((100vw - 100%) / 2)));
  `)}
`;

const mixinOverflowManual = (overflowPx: number) => css`
  ${Carousel} {
    width: calc(100% + ${overflowPx}px);
    margin-right: calc(-1 * ${overflowPx}px);
  }
`;

const mixinOverflowHorizontal = (overflowHorizontalPx: number) => css`
  ${Carousel} {
    width: calc(100% + (${2 * overflowHorizontalPx}px));
    margin-left: -${overflowHorizontalPx}px;
    margin-right: -${overflowHorizontalPx}px;
    .flickity-slider {
      margin-left: ${overflowHorizontalPx}px;
    }
  }
`;

export type ArgsProps = {
  maxWidthPx: number;
  overflowAuto?: boolean;
  overflowManualPx?: number;
  overflowHorizontalPx?: number;
}

const CarouselWrapperSC = styled.div<ArgsProps>`
  &, ${Carousel} {
    max-width: ${({ maxWidthPx }) => `${maxWidthPx}px`};
  }
  ${Carousel} {
    ${({ overflowAuto }) => overflowAuto && cssAuto};
  }
  
  ${({ overflowManualPx }) => overflowManualPx && mixinOverflowManual(overflowManualPx)};
  ${({ overflowHorizontalPx }) => overflowHorizontalPx && mixinOverflowHorizontal(overflowHorizontalPx)};
`;

export function CarouselWidthWrapper({
  children,
  ...args
}: React.PropsWithChildren<ArgsProps>) {
  return (
    <CarouselWrapperSC {... args}>
      {children}
    </CarouselWrapperSC>
  );
}
