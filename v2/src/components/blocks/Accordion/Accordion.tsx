import AccordionCard from './partials/AccordionCard/AccordionCard'
import EditorialText from '../../partials/EditorialText/EditorialText';

import styles from "./Accordion.module.scss";

export type AccordionProps = {
  className?: string;
  title?: string;
  description?: string;
  sections: {
    label: string;
    content: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  description,
  sections
}) => {
  return (
    <section className={`${styles["container"]} ${className}`}>
      { (!!title || !!description) &&
        <header className={styles["header"]}>
          {!!title && <h2 className={styles["header__title"]}>{title}</h2>}
          {!!description && <EditorialText className={styles["header__description"]} content={description} />}
        </header>
      }
      <ul className={styles["section-list"]}>
        {sections.map((section, i) => {
          return <AccordionCard key={i} label={section.label} content={section.content}/>
        })}
      </ul>
    </section>
  )
}

export default Accordion