import React from 'react';

export type SchoolBrandIconProps = { fill: string };

export default function SchoolBrandIcon({ fill }: SchoolBrandIconProps) {
  return (
    <>
      <circle cx="12.5" cy="12.5" r="12.5" fill={fill} />
      <path fill="#fff" d="M16.406 7.328a3.158 3.158 0 00-.914.135 3.066 3.066 0 00-6.012 0 3.158 3.158 0 00-.914-.135 2.993 2.993 0 10-.116 5.985v5.076a.115.115 0 00.116.113h7.84a.115.115 0 00.116-.113v-5.076a2.993 2.993 0 10-.116-5.985z" />
    </>
  );
}
