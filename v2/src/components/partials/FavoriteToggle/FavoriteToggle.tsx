import classNames from "classnames/bind";

import styles from "./FavoriteToggle.module.scss";

const cx = classNames.bind(styles);

export interface FavoriteToggleProps {
  className?: string,
  onClick(): void,
  favorite: boolean,
  theme?: "light" | "dark",
}

export const FavoriteToggle: React.FC<FavoriteToggleProps> = ({
  className,
  onClick,
  favorite = false,
  theme = "dark",
}) => {
  const classNames = cx({
    "toggle": true,
    "toggle--is-favorite": favorite,
    [`toggle--is-${theme}`]: !!theme,
  });
  
  return (
    <svg 
      className={`${classNames} ${className}`}
      role="button"
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="transparent"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles[`toggle__ribbon`]}
        d="M11.67,16.95l-7.48,5.19V1.14h15V22.14l-7.52-5.19Z"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <g
        className={styles[`toggle-plus`]}
        stroke="transparent"
      >
        <path
          className={styles[`toggle-plus__line`]}
          d="M11.68,5.14V13.14"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          className={styles[`toggle-plus__line`]}
          d="M7.68,9.14H15.68"
          stroke-width="2"
          stroke-linecap="round"
        />  
      </g>
    </svg>
  )
};

export default FavoriteToggle;