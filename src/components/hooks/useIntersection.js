import { useEffect, useState } from 'react';

const useIntersection = (ref, options, componentLoaded) => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState(null);
  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handler = (entries) => {
        setIntersectionObserverEntry(entries[0]);
      };
      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);
      if (componentLoaded) observer.disconnect();
      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => { };
  }, [options.threshold, options.root, options.rootMargin, ref, options, componentLoaded]);
  return intersectionObserverEntry;
};
export default useIntersection;
