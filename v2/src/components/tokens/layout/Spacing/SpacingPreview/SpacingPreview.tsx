import styles from "./SpacingPreview.module.scss";

export interface SpacingPreviewProps {
  className?: string,
  keyLabel?: string,
  keyColumnWidth?: string,
  valueLabel?: string,
  valueColumnWidth?: string,
  valueFormat?(value: number | string): number | string,
  list?: {
    [key: string]: number | string
  },
}

export const SpacingPreview: React.FC<SpacingPreviewProps> = ({
  className,
  keyLabel = "Key",
  keyColumnWidth = "1fr",
  valueLabel = "Value",
  valueColumnWidth = "1fr",
  list = {},
}: SpacingPreviewProps) => {
  return (
    <ul className={`
    ${styles["list"]}
    ${className}
    `}>
      <li 
          className={`
            ${styles["item"]}
            ${styles["item--is-heading"]}
          `}
        style={{
          gridTemplateColumns: `minmax(1rem, ${keyColumnWidth}) minmax(1rem, ${valueColumnWidth})  minmax(1rem, 1fr)`
        }}
      >
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
        <span
          className={`
            ${styles["item__value"]}
            ${styles["item__heading"]}
          `}>
            Preview
        </span>
      </li>
      {Object.keys(list).map((key, i) => {
  
        return (
          <li
            className={`${styles["item"]}`}
            style={{
              gridTemplateColumns: `minmax(1rem, ${keyColumnWidth}) minmax(1rem, ${valueColumnWidth})  minmax(1rem, 1fr)`
            }}
          >
            <span className={`${styles["item__key"]}`}>
              {key}
            </span>
            <span className={`${styles["item__value"]}`}>
              {list[key]}
            </span>
            <span className={`${styles["item__preview"]}`}>
              <span
                style={{height: list[key], width: list[key]}}
                className={`${styles["spacing"]}`}
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default SpacingPreview;