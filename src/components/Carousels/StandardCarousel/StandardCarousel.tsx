/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, useCallback, useState, useEffect, useRef, createContext, useContext } from 'react';
import styled, { css } from 'styled-components';
import Flickity from 'flickity';
import 'flickity-imagesloaded';
import useResizeObserver from 'use-resize-observer';
import { withThemes, color } from '../../../styles';
import { cssThemedBackground, cssThemedColor, cssThemedFont } from '../../../styles/mixins';

const arrowPath = 'M 45.4883 88.5586 C 48.082 92.5664 53.2734 93.7109 57.3086 91.4219 C 61.3477 88.8477 62.5 83.6953 60.1953 79.6914 L 40.0078 47.6445 L 60.1953 15.5977 C 62.7891 11.5898 61.6367 6.1523 57.3086 3.8633 C 55.8672 3.0078 54.4258 2.4336 52.6953 2.4336 C 49.8125 2.4336 46.9297 3.8633 45.4883 6.4414 L 19.5352 47.6445 L 45.4883 88.5586 Z M 45.4883 88.5586';

function isAllSlidesVisible(flkty: any): boolean {
  const slideableWidth = flkty?.slideableWidth;
  const availableWidth = flkty?.size?.innerWidth;
  return availableWidth >= slideableWidth;
}

/**
 * If carousel viewport is larger than area to slide, there
 *  is a bunch of weird ui rendering bugs. Therefore interaction
 *  is disabled
 */
function disableFlickity(flkty: any): void {
  flkty.options.wrapAround = false;
  flkty.options.draggable = false;
  flkty.updateDraggable();
  flkty.select(0);
}

function enableFlickity(flkty: any): void {
  flkty.options.wrapAround = true;
  flkty.options.draggable = true;
  flkty.updateDraggable();
}

type FlickityState = {
  ref: (instance: HTMLElement | null) => void,
  flickity: React.MutableRefObject<Flickity | null>,
  flickityRef: (elem: any) => void,
  hideButtons: boolean,
}

function useFlickity(): FlickityState {
  const { ref, width } = useResizeObserver();
  const flickity = useRef<Flickity | null>(null);
  const [hideButtons, setHideButtons] = useState<boolean>(false);

  useEffect(() => {
    if (flickity.current) {
      const allSlidesVisible = isAllSlidesVisible(flickity.current);
      if (allSlidesVisible) {
        disableFlickity(flickity.current);
        setHideButtons(true);
      } else {
        enableFlickity(flickity.current);
        setHideButtons(false);
      }
      flickity.current.resize();
    }
  }, [flickity, width]);

  const flickityRef = useCallback((elem) => {
    const flkty = new Flickity(elem, {
      imagesLoaded: true,
      wrapAround: true,
      cellAlign: 'left',
      pageDots: false,
      prevNextButtons: false,
    });
    flkty.resize();
    flickity.current = flkty;
  }, []);

  return { ref, flickity, flickityRef, hideButtons };
}

const Carousel = styled.div`
  width: 100%;
  .flickity-viewport {
    /* 100% slides vertical scrollbar bug */
    overflow: hidden;
  }
`;

const Divider = styled.div<{showDivider?: boolean}>`
  width: 100%;
  margin-bottom: ${({ showDivider }) => (showDivider ? '12px' : '8px')};

  ${({ showDivider }) => !!showDivider && withThemes({
    default: css`
      background-color: ${color.silver};
      height: 2px;
    `,
    cco: css`
      background-color: ${color.whiteSmoke};
      height: 4px;
    `,
    cio: css`
      background-color: ${color.bone};
      height: 2px;
    `,
  })}
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 0;
  position: relative;

  ${withThemes({
    default: css`background: ${color.wintergreenDream};`,
    cco: css`background: ${color.queenBlue};`,
    cio: css`background: ${color.squirrel};`,
  })}

  &:hover {
    ${cssThemedBackground}
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); 
    outline: none;
  }

  &:active{
    opacity: 0.6;
  }
`;

const Svg = styled.svg`
  width: 60%;
  height: 60%;
  position: absolute;
  left: 20%;
  top: 20%;
  fill: white;
`;

const Navigation = styled.nav`
  flex-shrink: 0;
  padding-bottom: 4px;
  ${Button}:first-child {
    margin-right: 8px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4px;
`;

const Title = styled.h2`
  ${cssThemedColor}
  ${cssThemedFont}
  font-size: 26px;
  line-height: 1.15;
  margin: 0;
`;

const ArrowButtonPrevious = (props: React.ComponentPropsWithoutRef<'button'>) => (
  <Button type="button" aria-label="Previous" {...props}>
    <Svg viewBox="0 0 100 100">
      <path d={arrowPath} />
    </Svg>
  </Button>
);

const ArrowButtonNext = (props: React.ComponentPropsWithoutRef<'button'>) => (
  <Button type="button" aria-label="Next" {...props}>
    <Svg viewBox="0 0 100 100">
      <path d={arrowPath} transform="translate(100, 100) rotate(180)" />
    </Svg>
  </Button>
);

export const context = createContext({
  onFocus: (e: React.FocusEvent<HTMLElement>) => {
    // eslint-disable-next-line no-console
    console.log('useCarouselContext used outside of provider', e);
  },
});

export const useCarouselContext = () => useContext(context);

export type StandardCarouselProps = PropsWithChildren<{
  title: string,
  showDivider?: boolean,
}>
export default function StandardCarousel({ title, showDivider, children }: StandardCarouselProps) {
  const { ref, flickity, flickityRef, hideButtons } = useFlickity();

  const onFocus = useCallback((ev: React.FocusEvent<HTMLElement>) => {
    // @ts-expect-error cell is type Cell
    const found = flickity.current?.cells.findIndex(cell => cell.element === ev.currentTarget);
    if (typeof found === 'number') {
      flickity.current?.select(found);
    }
  }, [flickity]);

  return (
    <section ref={ref}>
      <Header>
        <Title>{title}</Title>
        <Navigation hidden={hideButtons}>
          <ArrowButtonPrevious onClick={() => flickity.current?.previous()} />
          <ArrowButtonNext onClick={() => flickity.current?.next()} />
        </Navigation>
      </Header>
      <Divider showDivider={showDivider} />
      <Carousel ref={flickityRef}>
        <context.Provider value={{ onFocus }}>
          {children}
        </context.Provider>
      </Carousel>
    </section>
  );
}
