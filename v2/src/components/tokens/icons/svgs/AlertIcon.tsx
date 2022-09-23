import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function AlertIcon({ fill }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={fill} d="M14.952 19.606a1.967 1.967 0 1 1 0 3.934 1.967 1.967 0 0 1 0-3.934zM13.07 7h3.738l-.489 10.994h-2.736z"/>
    </svg>
  );
}
