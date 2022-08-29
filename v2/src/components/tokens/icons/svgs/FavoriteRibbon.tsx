import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function FavoriteRibbonIcon({ fill }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 17 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path className="outer-stroke" d="M8.483 16.809L1 22V1h15v21z" fill={fill} stroke={fill} strokeMiterlimit="10" strokeWidth="2" />
        <path className="favorite-ribbon-icon__ribbon" d="M0 0v23.91L8.48 18 17 23.91V0zm13.5 10h-4v4a1 1 0 01-2 0v-4h-4a1 1 0 010-2h4V4a1 1 0 012 0v4h4a1 1 0 010 2z" fill={fill} />
      </g>
    </svg>
  );
}
