/* eslint-disable @typescript-eslint/no-explicit-any */
import type Flickity from 'flickity';
import React, { PropsWithChildren, useCallback, createContext, useContext, useEffect } from 'react';
import ArrowButton from './ArrowButton';

import { Title, Header, Navigation, Divider, Carousel } from './styled-elements';
import useFlickity, { FlickityState } from './useFlickity';

export const context = createContext({
  registerOnChange: (callback: (flickity: Flickity) => void): (() => void) => {
    // eslint-disable-next-line no-console
    console.log('useCarouselContext hook outside of provider', callback);
    return () => {
      // eslint-disable-next-line no-console
      console.log('useCarouselContext hook unregister outside of provider', callback);
    };
  },
  onFocus: (e: React.FocusEvent<HTMLElement>) => {
    // eslint-disable-next-line no-console
    console.log('useCarouselContext hook outside of provider', e);
  },
  resize: () => {
    // eslint-disable-next-line no-console
    console.log('useCarouselContext hook outside of provider');
  },
});

export const useCarouselContext = () => useContext(context);

export type StandardCarouselProps = PropsWithChildren<{
  /** Always required even with header option for aria reasons */
  title: string;
  /** Add site themed horizontal line below carousel title */
  showDivider?: boolean;
  /** Pass a node to replace title section, reused components in ./Headers */
  header?: React.ReactNode;
  /** Pass a hook returning flickity state, choose from hooks in ./useFlickity */
  useFlickityHook?: () => FlickityState;
}>
export default function BaseCarousel({
  title,
  showDivider,
  children,
  header,
  useFlickityHook = useFlickity,
}: StandardCarouselProps): JSX.Element {
  const { ref, flickity, flickityRef, hideButtons } = useFlickityHook();

  /** Scrolls carousel when contents of a slide are highlighted through tabbing. */
  const onFocus = useCallback((ev: React.FocusEvent<HTMLElement>) => {
    // @ts-expect-error cell is type Cell
    const found = flickity.current?.cells.findIndex(cell => cell?.element === ev.currentTarget);
    if (typeof found === 'number') {
      flickity.current?.selectCell(found);
    }
  }, [flickity]);

  const registerOnChange = useCallback((callback) => {
    callback(flickity.current);
    flickity.current?.on('change', () => callback(flickity.current));
    return () => {
      flickity.current?.off('change', callback);
    };
  }, [flickity]);

  const resize = useCallback(() => {
    flickity.current?.resize();
  }, [flickity]);

  const publishEvent = useCallback((evt, data) => {
    if (typeof window.dry !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.dry.events.publish(evt, data);
    }
  }, []);

  const handleCellChange = useCallback((idx) => {
    const cell = (flickity.current?.cells[idx] as any).element;
    const node = cell.cloneNode(true);
    publishEvent('flickity:change', { node, idx });
  }, [flickity, publishEvent]);

  const handleCellClick = useCallback((evt: React.FocusEvent<HTMLElement>) => {
    const button = evt.target.closest('button');
    if (button) {
      const list = button.classList;
      if (list.contains('remove-cell')) {
        evt.preventDefault();
        if ((flickity.current?.slides || []).length > 1) {
          const { selectedIndex } = flickity.current || {};
          publishEvent('flickity:remove', { ...button.dataset, selectedIndex });

          setTimeout(() => {
            const cell = button.closest('.suggestion-card');
            if (cell) flickity.current?.remove(cell);
          }, 500);

          if (flickity.current?.cells.length < 6) {
            setTimeout(() => {
              flickity.current?.next(true);
            }, 2500);
          }
        } else {
          publishEvent('flickity:remove', { ...button.dataset });
          flickity.current?.destroy();
        }
      } else if (list.contains('next-cell')) {
        flickity.current?.next();
        publishEvent('flickity:next', null);
      } else if (list.contains('previous-cell')) {
        flickity.current?.previous(true);
        publishEvent('flickity:previous', null);
      }
    }
  }, [flickity, publishEvent]);

  useEffect(() => {
    const container = (flickity.current as any)?.element;
    container.addEventListener('click', handleCellClick);
    flickity.current?.on('change', handleCellChange);
    return () => container.removeEventListener('click', handleCellClick);
  }, [flickity, handleCellClick, handleCellChange]);

  const carouselLabel = `Carousel: ${title}`;

  return (
    <section ref={ref}>
      <Header aria-label={carouselLabel}>
        {header ?? <Title>{title}</Title>}
        <Navigation aria-label={carouselLabel} hidden={hideButtons}>
          <ArrowButton aria-label={`Previous Slide: ${carouselLabel}`} onClick={() => flickity.current?.previous()} />
          <ArrowButton aria-label={`Next Slide: ${carouselLabel}`} rotate onClick={() => flickity.current?.next()} />
        </Navigation>
      </Header>
      <Divider showDivider={showDivider} />
      {/* IMPORTANT: Cards use this internally `.carousel & {}` to avoid breakpoint styles */}
      <Carousel ref={flickityRef} className="carousel">
        <context.Provider value={{ registerOnChange, onFocus, resize }}>
          {children}
        </context.Provider>
      </Carousel>
    </section>
  );
}
