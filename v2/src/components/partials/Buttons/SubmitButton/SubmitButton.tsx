import styles from "./SubmitButton.module.scss";

export interface SubmitButtonProps {
  className?: string,
  label: string,
  onClick(): void,
  disabled?: boolean,
}

export const SubmitButton = ({
  className,
  label = "Submit Button",
  onClick = () => {alert('Button Clicked!')},
  disabled = false,
}: SubmitButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {label}
    </button>
  )
};

export default SubmitButton;