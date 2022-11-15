import { useEffect, useState } from 'react';
import { PianoConfig } from './PianoContainer';

declare global {
  interface Window {
    tp: any;
  }
}

const usePiano = ({
  segment,
  eventHandlers = [],
  tags,
  url,
}: PianoConfig) => {
  useEffect(() => {
    window.tp.push(['setCustomVariable', 'userSegment', segment]);
    window.tp.push(['setPageURL', url]);
    window.tp.push(['setUseTinypassAccounts', false]);
    window.tp.push(['setUsePianoIdUserProvider', false]);
    window.tp.push(['setUsePianoIdLiteUserProvider', true]);
    window.tp.push(['setAid', 'P3MUmmU9pu']);
    window.tp.push([
      'init',
      function initExperience() {
        window.tp.experience.init();
      },
    ]);
  }, []);
}

export default usePiano;
