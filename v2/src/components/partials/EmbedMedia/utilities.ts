import { useEffect } from 'react';

export type MediaEmbed = {
  caption?: string;
  source: string;
}

export const useScript = (src: string, onLoad?: () => void): void => {
  useEffect(() => {
    if (!src) return () => {};
    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    if (onLoad) {
      script.addEventListener('load', () => onLoad());
    }
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src, onLoad]);
};
   