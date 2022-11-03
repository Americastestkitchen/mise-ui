import React from "react";

import Frame from "../Frame/Frame"
import ContentContainer from "../../tokens/ContentContainer/ContentContainer";

import styles from "./src/styles/Basic.module.scss";

export interface BasicProps {
  className?: string;
  before?: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
  after?: JSX.Element | JSX.Element[];
}

export const Basic: React.FC<BasicProps> = ({
  className,
  children,
}: BasicProps) => {
  return (
    <Frame className={`${styles["container"]} ${className}`}>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Frame>
  )
};

export default Basic;