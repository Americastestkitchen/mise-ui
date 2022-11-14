import styles from "./AspectRatio.module.scss";
import { ReactNode } from "react";

export interface AspectRatioProps {
  children?: ReactNode;
}

const AspectRatio = ({ children }: AspectRatioProps) => {
  return (
    <div className={styles.aspectRatioWrapper}>
      {children}
    </div>
  )
};

export default AspectRatio;
