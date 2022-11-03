import classNames from 'classnames/bind';

import styles from "./Section.module.scss";

const cx = classNames.bind(styles);

export interface SectionProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
  bgColorName?: "red" | "orange" | "yellow" | "green" | "blueGreen" | "blue" | "purple";
  bgColorHex?: `#${string}`;
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  bgColorHex,
  bgColorName = "red",
}: SectionProps) => {
  const classNames = cx({
    'container': true,
    [`container--is-${bgColorName}`]: !!bgColorName,
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