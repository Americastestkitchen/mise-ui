import styles from "./Caption.module.scss";

type CaptionProps = {
  caption?: string 
};

const Caption = ({ caption }: CaptionProps) => {
  return caption ? (
    <div className={styles.descriptionWrapper}>
      <span className={styles.description}>{caption}</span>
      <div className={styles.accentRectangle} />
    </div>
  ) : null;
};

export default Caption;