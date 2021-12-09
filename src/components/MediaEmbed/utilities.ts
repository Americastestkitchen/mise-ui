import { useEffect, useRef, useState } from 'react';

/**
 * Attach async script tag. Do nothing when src is undefined.
 * @param src script src to load async.
 * @param onLoad Callback when script has finished loading.
 */
export const useScript = (src?: string, onLoad?: () => void): void => {
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
  /** The post or video url being requested */
  source: string,
  /** The base url to request oembeds of the source type */
  baseUrl: string,
  /** The script to load with the source type */
  script: string;
  /** A callback to execute when script loads i.e. processesing embeds */
  onLoad?: () => void
};

/**
 * Fetch OEmbed payload and load scirpt source.
 * @returns OEmbed payload or undefined.
 */
export const useOEmbed = ({
  source,
  baseUrl,
  script,
  onLoad,
}: useOEmbedArgs): { html?: string } | undefined => {
  useScript(script, onLoad);
  const isMounted = useRef(true);

  useEffect(() => () => {
    isMounted.current = false;
  }, []);

  const [data, setData] = useState<{ html?: string } | undefined>(undefined);

  useEffect(() => {
    fetch(`${baseUrl}${source}`)
      .then(res => (res.ok ? res.json() : undefined))
      .catch(() => undefined)
      .then((payload) => {
        if (isMounted.current) {
          setData(payload);
        }
      });
  }, [baseUrl, source]);

  return data;
};
