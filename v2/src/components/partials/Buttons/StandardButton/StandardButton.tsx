import classNames from "classnames/bind";

import styles from "./StandardButton.module.scss";

const cx = classNames.bind(styles);

export interface StandardButtonProps {
  className?: string,
  label: string,
  onClick(): void,
  variant?: "dark" | "light",
}

export const StandardButton = ({
  className,
  label = "Standard Button",
  onClick = () => {alert('Button Clicked!')},
  variant = "dark",
}: StandardButtonProps) => {
  const classNames = cx(
    "button",
    `button--is-${variant}`,
    className,
  );
  return (
    <button
      className={`${classNames}`}
      onClick={() => onClick()}
    >
      {label}
    </button>
  )
};

export default StandardButton;