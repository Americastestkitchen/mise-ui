import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function PriceUpdateIcon({ fill }: IconSvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path fill={fill} d="M16.12 21.862v1.82h-1.9v-1.8a7.21 7.21 0 0 1-4.72-2.081l1.54-2.16a5.9 5.9 0 0 0 3.18 1.7V16.2c-2.06-.5-4.3-1.3-4.3-4 0-2.04 1.62-3.76 4.3-4.02V6.32h1.9v1.9A6.945 6.945 0 0 1 20.18 10l-1.58 2.081a5.5 5.5 0 0 0-2.48-1.3v2.8c2.08.54 4.381 1.34 4.381 4.061 0 2.199-1.441 3.92-4.381 4.22zm-1.721-8.7v-2.541c-1.02.1-1.56.621-1.56 1.341 0 .618.64.958 1.56 1.198zm3.2 4.8c0-.74-.7-1.08-1.66-1.36v2.8c1.141-.161 1.661-.781 1.661-1.441z"/>
    </svg>
  );
}

