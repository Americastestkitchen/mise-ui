import React from 'react';
import cx from 'classnames';

import CircularIcon from '../CircularIcon/CircularIcon';
import { IconType } from '../../tokens/icons/svgs/useIconMap';
import styles from './circularButton.module.scss';

type CircularButtonProps = {
  iconType: IconType;
  onClick: () => void;
};

const CircularButton = ({ iconType, onClick }: CircularButtonProps) => {
  const classNames = cx(
    'circular-button',
    styles.button,
  );

  return (
    <button className={classNames} onClick={onClick}>
      <CircularIcon type={iconType} />
    </button>
  );
};

export default CircularButton;
