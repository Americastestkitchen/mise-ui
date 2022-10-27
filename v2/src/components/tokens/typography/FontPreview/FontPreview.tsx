import { useState } from "react";

import { getTokenTitle, remToPx } from '../../utils'

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
      <h3>{getTokenTitle(name)}</h3>
      <span>Family:{font.family.split(',').shift()}</span>
      <span>Fallbacks: {font.family.split(',').pop()}</span>
      <span>Styles:</span>
      {Object.keys(font.style).map((style, i) => {
          return (
            <span role="button" onClick={() => setActiveStyle(font.style[style as keyof typeof font.style] || "normal")}>
              {font.style[style as keyof typeof font.style]}
              {Object.keys(font.style).length === i + 1 ? `` : `, `}
            </span>
          )
      })}
      <span>Weights:</span>
      {Object.keys(font.weight).map((weight, i) => {
          const weightName = `${weight}${Object.keys(font.weight).length === i + 1 ? `` : `, `}`
          return (
            <span role="button" onClick={() => setActiveWeight(font.weight[weight as keyof typeof font.weight] || 400)}>
              {`${font.weight[weight as keyof typeof font.weight]}/${weightName}`}
            </span>
          )
      })}
      <ul>
        {Object.keys(font.size).map((size, i) => {
            return (
              <li>
                <span style={{
                  fontFamily: font.family,
                  fontSize: font.size[size],
                  fontStyle: activeStyle,
                  fontWeight: activeWeight,
                  lineHeight: font.lineHeight[size],
                  textTransform: font.uppercase ? "uppercase" : "none",
                  letterSpacing: font.letterSpacing || "normal"
                }}>
                  {sampleText}
                </span>
                <span>
                  {`${size}: ${remToPx(font.size[size])}/${font.size[size]}/${font.lineHeight[size]}`}
                </span>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default FontPreview;