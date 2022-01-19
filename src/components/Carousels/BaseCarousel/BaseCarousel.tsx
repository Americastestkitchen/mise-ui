import React, { PropsWithChildren, useCallback, createContext, useContext } from 'react';
import ArrowButton from './ArrowButton';

import { Title, Header, Navigation, Divider, Carousel } from './styled-elements';
import useFlickity, { FlickityState } from './useFlickity';

export const context = createContext({
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
  /**
   * Add to enable mobile and tablet breakpoints to overflow margin.
   * --side-margin: <value> !important; can be used to override this value
   *  if necessary.
   */
  withBreakpointWidth?: boolean;
  /** Pass a node to replace title section, reused components in ./Headers */
  header?: React.ReactNode;
  /** Pass a hook returning flickity state, choose from hooks in ./useFlickity */
  useFlickityHook?: () => FlickityState;
}>
export default function StandardCarousel({
  title,
  showDivider,
  withBreakpointWidth,
  children,
  header,
  useFlickityHook = useFlickity,
}: StandardCarouselProps): JSX.Element {
  const { ref, flickity, flickityRef, hideButtons } = useFlickityHook();

  /** Scrolls carousel when contents of a slide are highlighted through tabbing. */
  const onFocus = useCallback((ev: React.FocusEvent<HTMLElement>) => {
    // @ts-expect-error cell is type Cell
    const found = flickity.current?.cells.findIndex(cell => cell.element === ev.currentTarget);
    if (typeof found === 'number') {
      flickity.current?.selectCell(found);
    }
  }, [flickity]);

  const resize = useCallback(() => {
    flickity.current?.resize();
  }, [flickity]);

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
      <Carousel ref={flickityRef} className="carousel" withBreakpointWidth={withBreakpointWidth}>
        <context.Provider value={{ onFocus, resize }}>
          {children}
        </context.Provider>
      </Carousel>
    </section>
  );
}
