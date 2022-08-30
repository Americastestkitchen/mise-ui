import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function BellIcon({ fill }: IconSvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 30 30">
      <path fill={fill} d="M19.898 16.424c0-.031-.015-.077-.015-.107v-2.053A4.55 4.55 0 0 0 18.52 11a4.851 4.851 0 0 0-1.256-.9v-.078a2.014 2.014 0 1 0-4.028 0v.078a4.642 4.642 0 0 0-2.619 4.164v2.052a.227.227 0 0 1-.015.107l-1.333 1.655a1.173 1.173 0 0 0-.153 1.256 1.185 1.185 0 0 0 1.072.674l2.936-.02A2.157 2.157 0 0 0 15.243 22a2.217 2.217 0 0 0 2.19-2.025l2.879.028a1.181 1.181 0 0 0 .919-1.93z"/>
    </svg>
  );
}
