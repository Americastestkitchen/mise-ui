import React from "react";

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
  }
  sampleText?: string,
}

export const FontPreview: React.FC<FontPreviewProps> = ({
  className,
  name,
  font,
  sampleText = "The five boxing wizards jump quickly",
}: FontPreviewProps) => {
  return (
    <div className={`${styles["container"]} ${className}`}>
      <h3>{getTokenTitle(name)}</h3>
      <span>Family:{font.family.split(',').shift()}</span>
      <span>Fallbacks: {font.family.split(',').pop()}</span>
      <span>Styles:</span>
      {Object.keys(font.style).map((style, i) => {
          return `${font.style[style as keyof typeof font.style]}${Object.keys(font.style).length === i + 1 ? `` : `, `}`
      })}
      <span>Weights:</span>
      {Object.keys(font.weight).map((weight, i) => {
          const weightName = `${weight}${Object.keys(font.weight).length === i + 1 ? `` : `, `}`
          return `${font.weight[weight as keyof typeof font.weight]}/${weightName}`
      })}
      <ul>
        {Object.keys(font.size).map((size, i) => {
            return (
              <li>
                <span style={{
                  fontFamily: font.family,
                  fontSize: font.size[size],
                  lineHeight:
                  font.lineHeight[size]
                }}>
                  {sampleText}
                </span>
                <span>
                  {`${font.size[size]}/${remToPx(font.size[size])}/${font.lineHeight[size]}`}
                </span>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default FontPreview;

// export const FontList = ({font}) => {
//   return (
//     <>
//       {Object.keys(font).map((name) => {
//         return (
//           <>
//             <hr/>
//             {Object.keys(font[name].weight).map((weight) => {
//               return (
//                 Object.keys(font[name].style).map((style) => {
//                   return (
//                     <>
//                       <p>
//                         <b>Weight:</b> {font[name].weight[weight] + '/' + weight}
//                         <br/>
//                         <b>Style:</b> {font[name].style[style]}
//                       </p>
//                       <Typeset
//                         style={{fontStyle: font[name].style[style]}}
//                         sampleText={SampleText}
//                         fontFamily={font[name].family}
//                         fontWeight={font[name].weight[weight]}
//                         fontSizes={
//                           font[name].size
//                             ? Object.values(font[name].size)
//                             : [ResetTypography.size]}
//                       />
//                     </>
//                   )
//                 })
//               )
//             })}
//           </>
//         )
//       })}
//     </>
//   )
// };