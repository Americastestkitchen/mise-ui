import { useEffect, useState } from 'react';

export type EmbedProps = { source: string; caption?: string };

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

type useOEmbedArgs = {
  source: string,
  baseUrl: string,
  script: string;
  onLoad?(): void
};

export const useOEmbed = ({
  source,
  baseUrl,
  script,
}: useOEmbedArgs) => {
  const [data, setData] = useState('');
  useEffect(() => {
    const scr = document.createElement('script');
    scr.async = true;
    scr.src = script;
    document.body.appendChild(scr);
    return () => {
      document.body.removeChild(scr);
    };
  });
  useEffect(() => {
    fetch(`${baseUrl}${source}`)
      .then(res => (res.ok ? res.json() : undefined))
      .catch(() => undefined)
      .then((payload) => {
        setData(payload?.html ?? '');
      });
  }, [baseUrl, source]);
  return data;
};
