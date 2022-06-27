import React from 'react';

export type CIOBrandIconProps = { fill: string };

export default function CIOBrandIcon({ fill }: CIOBrandIconProps) {
  return (
    <>
      <circle cx="12.5" cy="12.5" r="12.5" fill={fill} />
      <path fill="#fff" d="M13.323 5C8.522 5 5.31 7.918 5.022 12.389c-.3 4.546 2.644 7.937 7.436 8.28 3.089.243 5.346-.84 6.652-3.134l-.352-.23a5.636 5.636 0 01-5.458 2.846c-3.688-.284-5.843-3.3-5.543-7.878.291-4.465 2.343-6.759 5.566-6.756 2.241 0 4.366 2.11 4.354 3.8a.7.7 0 01.027.259h.351v-.69c.011-1.143.053-2.346.108-3.68h-.324c-.108.354-.213.532-.433.546A19.024 19.024 0 0013.323 5z" />
    </>
  );
}
