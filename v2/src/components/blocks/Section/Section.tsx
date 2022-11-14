import classNames from 'classnames/bind';

import styles from "./Section.module.scss";

const cx = classNames.bind(styles);

export interface SectionProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
  parentColumn?: "1" | "5-8";
  bgColorName?: "red" | "orange" | "yellow" | "green" | "blueGreen" | "blue" | "purple" | "white";
  bgColorHex?: `#${string}`;
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  parentColumn = "1",
  bgColorHex,
  bgColorName = "red",
}: SectionProps) => {
  const classNames = cx({
    'container': true,
    [`container--is-${bgColorName}`]: !!bgColorName,
    [`container--is-column-${parentColumn}`]: !!parentColumn,
  });

  return (
    <section
      className={`${classNames} ${className}`}
      style={{
        backgroundColor: !!bgColorHex ? bgColorHex : "auto",
      }}
    >
      <div className={`${styles["content"]}`}>
        {children}
      </div>
    </section>
  )
};

export default Section;