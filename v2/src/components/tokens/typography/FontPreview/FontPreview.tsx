import React from "react";

import styles from "./styles/FontPreview.module.scss";

export interface FontPreviewProps {
  className?: string 
}

export const FontPreview: React.FC<FontPreviewProps> = ({ className }: FontPreviewProps) => {
  return <div className={`${styles["component"]} ${styles["test"]} ${className}`}>FontPreview</div>;
};

export default FontPreview;