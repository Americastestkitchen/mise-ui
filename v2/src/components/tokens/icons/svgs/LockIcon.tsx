import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function LockIcon({ fill }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 8 10"
    >
      <path
        fill={fill}
        d="M5.5 4.4h-3V2.7c0-.8.7-1.4 1.5-1.4s1.4.6 1.4 1.4v1.7zm1.4 0V2.7C6.9 1.2 5.6 0 4 0h-.1C2.4 0 1.1 1.2 1 2.7v1.6H0V10h8V4.4H6.9z"
      />
    </svg>
  );
}
