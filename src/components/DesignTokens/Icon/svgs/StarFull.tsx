import React from 'react';

export type StarFullProps = { color?: string };

export default function StarFull({ color = '#3d3d3d' }: StarFullProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      className="icon-star-full"
      role="img"
      viewBox="0 0 15.2 14.5"
    >
      <path fill={color} d="M7.6 11l-4.7 3.5 1.8-5.6L0 5.5h5.8L7.6 0l1.8 5.5h5.8l-4.7 3.4 1.8 5.6L7.6 11z" />
    </svg>
  );
}
