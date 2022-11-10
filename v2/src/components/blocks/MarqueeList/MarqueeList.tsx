import List from "./_partials/List"

import styles from "./MarqueeList.module.scss";

export interface MarqueeListProps {
  className?: string,
  heading?: string,
  description?: string,
  variant?: "dark" | "light",
}

export const MarqueeList = ({
  className,
  heading,
  description,
  variant,
}: MarqueeListProps) => {
  return (
    <section className={`${styles.container} ${className}`}>
      {
        (heading || description) &&
        <header>
          {heading && <h2 className={styles["heading"]}>{heading}</h2>}
          {description && <p className={styles["description"]}>{description}</p>}
        </header>
      }
      <List />
    </section>
  )
};

export default MarqueeList;
