import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function Checkmark({ fill }: IconSvgProps) {
  return (
    <svg
      className="icon"
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 28 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="icon-fill" fill={fill} d="M.325 12.668a1.126 1.126 0 0 1 .003-1.586l2.8-2.799a1.121 1.121 0 0 1 1.583 0l4.548 4.536a1.123 1.123 0 0 0 1.583-.003L23.3.33a1.124 1.124 0 0 1 1.586-.003l2.785 2.765a1.12 1.12 0 0 1 .005 1.581L12.566 19.82c-.434.434-1.295.791-1.911.791H9.35c-.617 0-1.475-.357-1.909-.794L.325 12.668z" />
    </svg>
  );
}
