import IconProps from "./IconProps";

export const SparkleIcon: React.FC<IconProps> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      fill="currentColor"
        aria-hidden="true"
        focusable="false"
        role="img"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M7.63,2.51h-.29c-.55,2.82-2.68,5.05-5.39,5.63v.3c2.73,.55,4.86,2.77,5.41,5.6h.26c.55-2.83,2.68-5.05,5.39-5.63v-.3c-2.71-.55-4.84-2.77-5.39-5.6h0Z"/>
      <path d="M2.49,5.35h.12c.26-1.3,1.24-2.35,2.49-2.6v-.13c-1.24-.27-2.23-1.32-2.49-2.62h-.12c-.26,1.3-1.24,2.35-2.49,2.6v.15c1.24,.25,2.23,1.3,2.49,2.6Z"/>
      <path d="M12.43,2.51h-.07c-.17,.8-.77,1.45-1.53,1.6v.07c.77,.17,1.39,.8,1.53,1.6h.07c.17-.8,.77-1.45,1.53-1.6v-.07c-.79-.15-1.39-.8-1.53-1.6Z"/>
    </svg>
  );
}

export default SparkleIcon