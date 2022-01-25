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
  width: calc(100% + ${overflowPx}px);
  margin-right: calc(-1 * ${overflowPx}px);
`;

export type ArgsProps = {
  maxWidthPx: number;
  overflowAuto?: boolean;
  overflowManualPx?: number;
}

const CarouselWrapperSC = styled.div<ArgsProps>`
  &, ${Carousel} {
    max-width: ${({ maxWidthPx }) => `${maxWidthPx}px`};
  }
  ${Carousel} {
    ${({ overflowAuto }) => overflowAuto && cssAuto};
  }
  ${Carousel} {
    ${({ overflowManualPx }) => overflowManualPx && mixinOverflowManual(overflowManualPx)};
  }
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
