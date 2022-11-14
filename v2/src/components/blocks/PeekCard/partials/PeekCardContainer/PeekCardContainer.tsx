import styles from "./PeekCardContainer.module.scss";

export interface PeekCardContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const PeekCardContainer: React.FC<PeekCardContainerProps> = ({
  className,
  children,
}) => {
  return <article className={`${styles["container"]} ${className}`}>{children}</article>
};

export default PeekCardContainer;
