import { useEffect, useState } from 'react';

export type EmbedProps = { source: string; caption?: string };

export const useScript = (src: string, onLoad?: () => void): void => {
  useEffect(() => {
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
  });
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
  onLoad,
}: useOEmbedArgs) => {
  useScript(script, onLoad);

  const [data, setData] = useState('');
  useEffect(() => {
    fetch(`${baseUrl}${source}`)
      .then(res => (res.ok ? res.json() : ''))
      .catch(() => undefined)
      .then((payload) => {
        setData(payload.html);
      });
  }, [baseUrl, source]);
  return data;
};
