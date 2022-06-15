/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from 'react';
import { useCarouselContext } from '../BaseCarousel';

export default function SuggestionSideEffects() {
  const { registerOnChange, flickity } = useCarouselContext();

  const publishEvent = useCallback((evt, data) => {
    if (typeof window.dry !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.dry.events.publish(evt, data);
    }
  }, []);

  useEffect(() => {
    registerOnChange((flickity, evIndex) => {
      if (typeof evIndex === 'undefined') return;
      const cell = (flickity.cells[evIndex] as any).element;
      const node = cell.cloneNode(true);
      publishEvent('flickity:change', { node, evIndex });
    });
  }, [publishEvent, registerOnChange]);

  const handleCellClick = useCallback((evt: React.FocusEvent<HTMLElement>) => {
    const button = evt.target.closest('button');
    if (button) {
      const list = button.classList;
      if (list.contains('remove-cell')) {
        evt.preventDefault();
        if ((flickity?.slides || []).length > 1) {
          const { selectedIndex } = flickity || {};
          publishEvent('flickity:remove', { ...button.dataset, selectedIndex });

          setTimeout(() => {
            const cell = button.closest('.standard-slide');
            if (cell) flickity?.remove(cell);
          }, 500);

          if ((flickity?.cells || []).length < 11) {
            setTimeout(() => {
              flickity?.next(true);
            }, 2500);
          }
        } else {
          publishEvent('flickity:remove', { ...button.dataset });
          flickity?.destroy();
        }
      } else if (list.contains('next-cell')) {
        flickity?.next();
        publishEvent('flickity:next', null);
      } else if (list.contains('previous-cell')) {
        flickity?.previous(true);
        publishEvent('flickity:previous', null);
      }
    }
  }, [flickity, publishEvent]);

  useEffect(() => {
    const container = (flickity as any)?.element;
    if (!container) return () => {};
    container.addEventListener('click', handleCellClick);
    return () => container.removeEventListener('click', handleCellClick);
  }, [flickity, handleCellClick]);
  return null;
}
