import IconProps from "./IconProps";

export const SaveIcon: React.FC<IconProps> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 11 11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.44909 7.71165L1.375 9.93471V0.941406H9.54169V9.93471L5.44909 7.71165Z" />
    </svg>
  );
}

export default SaveIcon