import React from 'react';

import CircularIcon from '../CircularIcon/CircularIcon';
import { IconType } from '../../tokens/icons/svgs/useIconMap';
import styles from './circularButton.module.scss';

type CircularButtonProps = {
  iconType: IconType;
  onClick: () => void;
};

const CircularButton = ({ iconType, onClick }: CircularButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    <CircularIcon type={iconType} />
  </button>
);

export default CircularButton;
