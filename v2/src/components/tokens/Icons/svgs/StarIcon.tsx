import IconProps from "./IconProps";

export const StarIcon: React.FC<IconProps> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.41823 13.5763L4.1285 17.7363L6.23317 11.1943L0.882568 7.22933H7.34019L9.38209 0.736328L11.404 7.22933H17.8826L12.5567 11.1933L14.6357 17.7363L9.41823 13.5763Z" />
    </svg>
  );
}

export default StarIcon