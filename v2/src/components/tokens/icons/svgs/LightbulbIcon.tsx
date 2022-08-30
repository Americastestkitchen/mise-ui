import React from 'react';

import IconSvgProps from './iconSvgProps';

export default function LightbulbIcon({ fill }: IconSvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 30 30">
      <path fill={fill} d="M16.728 20.686h-3.459a.725.725 0 0 0-.725.725v.94a.724.724 0 0 0 .725.725h.128c.081 1.089 3.125 1.089 3.207 0h.124a.725.725 0 0 0 .725-.725v-.943a.725.725 0 0 0-.725-.722zM15 5.596a5.511 5.511 0 0 0-4.505 8.694 14.048 14.048 0 0 1 1.909 3.839c.029 1.822.288 1.809 2.6 1.809 2.289 0 2.563.016 2.6-1.76.22-1.352 1.266-2.648 2.043-4.086a5.512 5.512 0 0 0-4.639-8.5zm.442 2.233a3.313 3.313 0 0 0-3.736 2.928l-.994-.107a4.314 4.314 0 0 1 4.863-3.812z"/>
    </svg>
  );
}
