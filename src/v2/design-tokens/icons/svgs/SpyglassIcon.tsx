import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function SpyglassIcon({ fill }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable={false}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
    >
      <path
        fill={fill}
        d="M3.8 11.2c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5-7.5-3.3-7.5-7.5m25.5 15.4l-8.9-8.9c1.3-1.9 2.1-4.2 2.1-6.5C22.5 5 17.5 0 11.2 0 5 0 0 5 0 11.2s5 11.2 11.2 11.2c2.3 0 4.6-.7 6.5-2.1l8.9 8.9c.7.8 2 .9 2.8.1.8-.7.8-1.9-.1-2.7"
      />
    </svg>
  );
}
