import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function FavoriteRibbonIconWithBg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 35.911">
      <defs>
        <filter id="a" x="0" y="0" width="29" height="35.911" filterUnits="userSpaceOnUse">
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feFlood flood-opacity=".161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g data-name="Feature Save Icon">
        <path data-name="Path 36565" d="M3.5 2.5h22v31.311l-10.876-7.37L3.5 33.811Z" fill="rgba(0,0,0,0.7)"/>
        <g filter="url(#a)">
          <path data-name="SAVE" d="M14.483 21.809 7 27V6h15v21Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
        </g>
      </g>
    </svg>
  );
}
