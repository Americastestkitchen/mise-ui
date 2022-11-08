import styles from "./src/styles/Frame.module.scss";

export interface FrameProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export const Frame: React.FC<FrameProps> = ({
  className,
  children,
}: FrameProps) => {
  return <main className={`${styles["container"]} ${className}`}>{children}</main>
};

export default Frame;