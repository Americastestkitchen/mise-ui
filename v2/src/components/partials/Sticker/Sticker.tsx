import React from 'react';

import styles from './sticker.module.scss';

export type StickerProps = {
  text: string;
  type: 'editorial' | 'priority';
};

const Sticker = ({ text, type }: StickerProps) => (
  <div className={`${styles.wrapper} ${styles[type]}`}>
    {text}
  </div>
);

export default Sticker;
