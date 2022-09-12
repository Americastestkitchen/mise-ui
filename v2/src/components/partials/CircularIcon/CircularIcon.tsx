import React from 'react';

import Icon from '../../tokens/icons/Icon';
import { IconType } from '../../tokens/icons/svgs/useIconMap';
import styles from './circularIcon.module.scss';

type CircularIconProps = {
  type: IconType;
};

const CircularIcon = ({ type }: CircularIconProps) => (
  <div className={`circular-icon ${styles.wrapper}`}>
    <Icon fill="#FFFFFF" type={type} />
  </div>
);

export default CircularIcon;
