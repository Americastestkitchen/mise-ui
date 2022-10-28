import { useState } from "react";

import { getTokenTitle, remToPx } from "../../utils/scripts/utils";

import styles from "./FontPreview.module.scss";
export interface FontPreviewProps {
  className?: string,
  name: string,
  font: {
    family: string,
    lineHeight: {
      [size: string]: number,
    },
    size: {
      [size: string]: string,
    },
    style: {
      normal?: "normal",
      italic?: "italic",
    },
    weight: {
      normal?: 400,
      bold?: 700,
    }
    uppercase?: boolean,
    letterSpacing?: string | "normal",
  }
  sampleText?: string,
}

export const FontPreview: React.FC<FontPreviewProps> = ({
  className,
  name,
  font,
  sampleText = "The five boxing wizards jump quickly",
}: FontPreviewProps) => {
  const [activeStyle, setActiveStyle] = useState(font.style[Object.keys(font.style)[0] as keyof typeof font.style] || "normal")
  const [activeWeight, setActiveWeight] = useState(font.weight[Object.keys(font.weight)[0] as keyof typeof font.weight] || 400)

  return (
    <div className={`${styles["container"]} ${className}`}>
      <h3 className={`${styles["font-title"]}`}>{getTokenTitle(name)}</h3>
      <ul className={`${styles["font-prop-list"]}`}>
        <li className={`${styles["font-prop"]}`}>
          <span className={`${styles["font-prop__label"]}`}>
            Family:
          </span>
          <span className={`${styles["font-prop__value"]}`}>
            {font.family.split(',').shift()}
          </span>
        </li>
        <li className={`${styles["font-prop"]}`}>
          <span className={`${styles["font-prop__label"]}`}>
            Fallbacks:
          </span>
          <span  className={`${styles["font-prop__value"]}`}>
            {font.family.split(',').pop()?.trim()}
          </span>
        </li>
        <li className={`${styles["font-prop"]}`}>
          <span className={`${styles["font-prop__label"]}`}>
            Styles:
          </span>
          {Object.keys(font.style).map((style, i) => {
              return (
                <>
                  { i !== 0 ? ", " : "" }
                  <span
                    className={`
                      ${styles["font-prop__value"]}
                      ${styles["font-prop__value--is-clickable"]}
                      ${activeStyle === font.style[style as keyof typeof font.style] ? styles["font-prop__value--is-active"] : ""}
                    `}
                    role="button"
                    onClick={() => setActiveStyle(font.style[style as keyof typeof font.style] || "normal")}
                  >
                    {font.style[style as keyof typeof font.style]}
                  </span>
                </>
              )
          })}
        </li>
        <li className={`${styles["font-prop"]}`}>
          <span  className={`${styles["font-prop__label"]}`}>
            Weights:
          </span>
          {Object.keys(font.weight).map((weight, i) => {
              return (
                <>
                  { i !== 0 ? ", " : "" }
                  <span
                    className={`
                      ${styles["font-prop__value"]}
                      ${styles["font-prop__value--is-clickable"]}
                      ${activeWeight === font.weight[weight as keyof typeof font.weight] ? styles["font-prop__value--is-active"] : ""}
                    `}
                    role="button"
                    onClick={() => setActiveWeight(font.weight[weight as keyof typeof font.weight] || 400)}
                  >
                    {`${font.weight[weight as keyof typeof font.weight]}/${weight}`}
                  </span>
                </>
              )
          })}
        </li>
      </ul>
      <ul className={`${styles["font-list"]}`}>
        {Object.keys(font.size).map((size, i) => {
            return (
              <li className={`${styles["font"]}`}>
                <span
                  className={`${styles["font__preview"]}`}
                  style={{
                    fontFamily: font.family,
                    fontSize: font.size[size],
                    fontStyle: activeStyle,
                    fontWeight: activeWeight,
                    lineHeight: font.lineHeight[size],
                    textTransform: font.uppercase ? "uppercase" : "none",
                    letterSpacing: font.letterSpacing || "normal"
                  }}
                >
                  {sampleText}
                </span>
                <span className={`${styles["font__details"]}`}>
                  {`${size} - size: ${remToPx(font.size[size])}/${font.size[size]} | line-height: ${remToPx(String(font.lineHeight[size]))}/${font.lineHeight[size]}`}
                </span>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default FontPreview;