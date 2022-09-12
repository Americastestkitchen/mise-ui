import React from 'react';

import IconSvgProps from './iconSvgProps';

// TODO (SVG update): ask design for new SVG without inline transform
export default function CloseIcon({ fill }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="12.828"
      height="12.828"
      viewBox="0 0 12.828 12.828"
    >
      <g transform="translate(1.414 1.414)">
        <line
          x2="14.142"
          transform="translate(0 0) rotate(45)"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={2}
        />
        <line
          x2="14.142"
          transform="translate(10 0) rotate(135)"
          stroke={fill}
          strokeLinecap="round"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
};
