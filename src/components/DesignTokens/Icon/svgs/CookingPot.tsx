import React from 'react';

export type CookingPotProps = { fill?: string; };

export default function CookingPot({
  fill = '#000000',
}: CookingPotProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="29.042"
      height="18.836"
    >
      <g data-name="Layer 2">
        <g data-name="Layer 1" fill={fill}>
          <path data-name="Path 42199" d="M28.451 7.165H.592a.592.592 0 1 0 0 1.183h1.855l1.129 8.364a2.151 2.151 0 0 0 2.152 2.124h17.586a2.151 2.151 0 0 0 2.151-2.071L26.6 8.349h1.855a.592.592 0 1 0 0-1.183z" />
          <path data-name="Path 42200" d="M2.985 5.927h23.072a.592.592 0 0 0 .592-.538c0-1.533-5.378-2.9-10.219-3.2l.7-1.156a.592.592 0 0 0-.511-1.022h-4.196a.592.592 0 0 0-.511.887l.7 1.156C7.691 2.427 2.393 3.803 2.393 5.389a.592.592 0 0 0 .592.538z" />
        </g>
      </g>
    </svg>
  );
}
