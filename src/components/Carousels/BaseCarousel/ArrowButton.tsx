import React from 'react';

import { Button, Svg } from './styled-elements';

const arrowPath = 'M 45.4883 88.5586 C 48.082 92.5664 53.2734 93.7109 57.3086 91.4219 C 61.3477 88.8477 62.5 83.6953 60.1953 79.6914 L 40.0078 47.6445 L 60.1953 15.5977 C 62.7891 11.5898 61.6367 6.1523 57.3086 3.8633 C 55.8672 3.0078 54.4258 2.4336 52.6953 2.4336 C 49.8125 2.4336 46.9297 3.8633 45.4883 6.4414 L 19.5352 47.6445 L 45.4883 88.5586 Z M 45.4883 88.5586';

type ArrowButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    rotate?: boolean;
}

export default function ArrowButton({ rotate, ...props }: ArrowButtonProps) {
  const rotation = rotate ? { transform: 'translate(100, 100) rotate(180)' } : {};
  return (
    <Button type="button" {...props}>
      <Svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
        role="img"
        rotated={rotate}
      >
        <path d={arrowPath} {...rotation} />
      </Svg>
    </Button>
  );
}
