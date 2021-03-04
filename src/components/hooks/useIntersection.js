import { useEffect, useState } from 'react';

const useIntersection = (ref, options) => {
  const { current } = ref;
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState(null);
  useEffect(() => {
    if (current && typeof IntersectionObserver === 'function') {
      const handler = (entries) => {
        setIntersectionObserverEntry(entries[0]);
      };
      const observer = new IntersectionObserver(handler, options);
      observer.observe(current);
      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => { };
  }, [current, options]);
  return intersectionObserverEntry;
};
export default useIntersection;
