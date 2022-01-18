import React, { PropsWithChildren, useCallback, createContext, useContext } from 'react';
import ArrowButton from './ArrowButton';

import { Title, Header, Navigation, Divider, Carousel } from './styled-elements';
import useFlickity, { FlickityState } from './useFlickity';

export const context = createContext({
  onFocus: (e: React.FocusEvent<HTMLElement>) => {
    // eslint-disable-next-line no-console
    console.log('useCarouselContext hook outside of provider', e);
  },
});

export const useCarouselContext = () => useContext(context);

export type StandardCarouselProps = PropsWithChildren<{
  /** Always required even with header option for aria reasons */
  title: string;
  linkText?: string;
  showDivider?: boolean;
  header?: React.ReactNode;
  useFlickityHook?: () => FlickityState;
}>
export default function StandardCarousel({
  title,
  showDivider,
  children,
  header,
  useFlickityHook = useFlickity,
}: StandardCarouselProps): JSX.Element {
  const { ref, flickity, flickityRef, hideButtons } = useFlickityHook();

  const onFocus = useCallback((ev: React.FocusEvent<HTMLElement>) => {
    // @ts-expect-error cell is type Cell
    const found = flickity.current?.cells.findIndex(cell => cell.element === ev.currentTarget);
    if (typeof found === 'number') {
      flickity.current?.selectCell(found);
    }
  }, [flickity]);

  return (
    <section ref={ref}>
      <Header aria-label={`Carousel: ${title}`}>
        {header ?? <Title>{title}</Title>}
        <Navigation aria-label={`Carousel: ${title}`} hidden={hideButtons}>
          <ArrowButton aria-label="Previous" onClick={() => flickity.current?.previous()} />
          <ArrowButton aria-label="Next" rotate onClick={() => flickity.current?.next()} />
        </Navigation>
      </Header>
      <Divider showDivider={showDivider} />
      {/* IMPORTANT: Cards use this internally `.carousel & {}` to avoid breakpoint styles */}
      <Carousel ref={flickityRef} className="carousel">
        <context.Provider value={{ onFocus }}>
          {children}
        </context.Provider>
      </Carousel>
    </section>
  );
}
