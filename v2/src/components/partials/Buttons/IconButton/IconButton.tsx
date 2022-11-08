import classNames from "classnames/bind";

import styles from "./IconButton.module.scss";

const cx = classNames.bind(styles);

export interface IconButtonProps {
  className?: string,
  icon: string,
  onClick(): void,
  disableBackground?: boolean,
}

export const IconButton = ({
  className,
  icon = 'x',
  onClick = () => {alert('Button Clicked!')},
  disableBackground = false,
}: IconButtonProps) => {
  const classNames = cx({
    'button': true,
    'button--has-background': !disableBackground,
    [`${className}`]: !!className,
  });

  return (
    <button
      className={classNames}
      onClick={() => onClick()}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  )
};

export default IconButton;