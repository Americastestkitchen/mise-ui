import styles from "./KeyValuePreview.module.scss";

export interface SpacingPreviewProps {
  className?: string,
  keyLabel?: string,
  keyColumnWidth?: string,
  valueLabel?: string,
  valueColumnWidth?: string,
  valueFormat?(
    value: number | string
  ): number | string,
  previewLabel?: string,
  previewColumnWidth?: string,
  previewFormat?(
    list: {
      [key: string]: number | string
    },
    key: string,
    value: number | string,
    index: number,
    array: string[],
  ): number | string | JSX.Element,
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
  valueFormat,
  previewLabel = "Preview",
  previewColumnWidth = "1fr",
  previewFormat,
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
        {
          !!previewFormat &&
          <span
            className={`
              ${styles["item__value"]}
              ${styles["item__heading"]}
            `}>
              {previewLabel}
          </span>
        }
      </li>
      {Object.keys(list).map((key, i, arr) => {
        return (
          <li
            key={key}
            className={`${styles["item"]}`}
            style={{
              gridTemplateColumns: `minmax(1rem, ${keyColumnWidth}) minmax(1rem, ${valueColumnWidth})  minmax(1rem, 1fr)`
            }}
          >
            <span className={`${styles["item__key"]}`}>
              {key}
            </span>
            <span className={`${styles["item__value"]}`}>
              {!!valueFormat ? valueFormat(list[key]) : list[key]}
            </span>
            { 
              !!previewFormat &&
              <span className={`${styles["item__preview"]}`}>
                {previewFormat(list, key, list[key], i, arr)}
              </span>
            }
          </li>
        );
      })}
    </ul>
  );
};

export default SpacingPreview;