import { useEffect, useState } from 'react';

const hasMedia = typeof window !== 'undefined' && window.matchMedia;

function useMedia(query) {
  const defaultValue = hasMedia ? window.matchMedia(query)?.matches : false;
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const media = hasMedia ? window.matchMedia(query) : false;
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    if (media) {
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
    return () => {};
  }, [query]);

  return matches;
}

export default useMedia;
