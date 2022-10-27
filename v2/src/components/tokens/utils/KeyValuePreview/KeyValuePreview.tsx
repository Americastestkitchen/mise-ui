import styles from "./KeyValuePreview.module.scss";

export interface KeyValuePreviewProps {
  className?: string,
  keyLabel?: string,
  valueLabel?: string,
  list?: {
    [key: string]: number | string
  },
}

export const KeyValuePreview: React.FC<KeyValuePreviewProps> = ({
  className,
  keyLabel = "Key",
  valueLabel = "Value",
  list = {},
}: KeyValuePreviewProps) => {
  return (
    <ul className={`${styles["list"]} ${className}`}>
      <li className={`
          ${styles["item"]}
          ${styles["item--is-heading"]}
      `}>
        <span
          className={`
            ${styles["item__key"]}
            ${styles["item__heading"]}
          `}>
            {keyLabel}
        </span>
        <span
          className={`
            ${styles["item__value"]}
            ${styles["item__heading"]}
          `}>
            {valueLabel}
        </span>
      </li>
      {Object.keys(list).map((key, i) => {
        return (
          <li className={`${styles["item"]}`}>
            <span className={`${styles["item__key"]}`}>
              {key}
            </span>
            <span className={`${styles["item__value"]}`}>
              {list[key]}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default KeyValuePreview;