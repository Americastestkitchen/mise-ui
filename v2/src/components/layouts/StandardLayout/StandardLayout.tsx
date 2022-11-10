import Frame from "../Frame/Frame"
import ContentContainer from "../../tokens/ContentContainer/ContentContainer";

import styles from "./StandardLayout.module.scss";

export interface StandardLayoutProps {
  className?: string;
  before?: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
  after?: JSX.Element | JSX.Element[];
}

export const StandardLayout: React.FC<StandardLayoutProps> = ({
  className,
  children,
}) => {
  return (
    <Frame className={`${styles["container"]} ${className}`}>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Frame>
  )
};

export default StandardLayout;