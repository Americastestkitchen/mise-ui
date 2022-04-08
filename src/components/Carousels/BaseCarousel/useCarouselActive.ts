import { useState, useEffect, useCallback } from 'react';
import { useCarouselContext } from './BaseCarousel';

export default function useCarouselActive(index: number): boolean {
  const [isActive, setIsActive] = useState(false);
  const { registerOnChange } = useCarouselContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeHandler = useCallback((flickity: Flickity & any) => {
    const cellActive = flickity.selectedElements.includes(flickity.cells[index]?.element);
    setIsActive(cellActive);
  }, [index]);

  useEffect(() => {
    const unregister = registerOnChange(changeHandler);
    return () => {
      unregister();
    };
  }, [registerOnChange, changeHandler]);

  return isActive;
}
