import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function TrendingIcon({ fill }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 37.458 25.384"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.655.734l.324 3.712 2.84-.248-9.037 11.263-7.749-6.804L1.747 22.735l2.717 2.381 9.033-11.263 7.74 6.805L32.531 6.58l.259 2.97 3.55-.31-.811-9.281z"
        fill={fill}
      />
    </svg>
  );
}
