import React from 'react';

type SaveRibbonTypes = {
  fill: string,
  className?: string,
}

const Save = ({ fill, className = 'save-ribbon' }: SaveRibbonTypes) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="11.286"
    height="15.911"
    viewBox="0 0 11.286 15.911"
  >
    <g transform="translate(1 1)">
      <path
        d="M4.632,9.787,0,13V0H9.286V13Z"
        fill="none"
        stroke={fill}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default Save;
