import React from 'react';
import cx from 'classnames';

import styles from './sticker.module.scss';

export type StickerProps = {
  text: string;
  type: 'editorial' | 'priority';
};

const Sticker = ({ text, type }: StickerProps) => {
  const classNames = cx(
    styles.wrapper,
    styles[type],
    'sticker',
  );

  return (
    <div className={classNames}>
      {text}
    </div>
  );
};

export default Sticker;
