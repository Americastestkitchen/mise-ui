import Basic from "../Basic/Basic";
import GridRow from "../../tokens/Grid/GridRow";
import GridColumn from "../../tokens/Grid/GridColumn";

import styles from "./src/styles/Empty.module.scss";

export interface ContentSidebarProps {
  className?: string;
  before?: JSX.Element | JSX.Element[];
  children: JSX.Element | JSX.Element[];
  sidebar: JSX.Element | JSX.Element[];
  after?: JSX.Element | JSX.Element[];
}

export const ContentSidebar: React.FC<ContentSidebarProps> = ({
  className,
  before,
  children,
  sidebar,
  after,
}: ContentSidebarProps) => {
  return (
    <Basic className={`${styles["container"]} ${className}`}>
      <>{ before }</>
      <GridRow>
        <GridColumn width="half">
          { children }
        </GridColumn>
        <GridColumn width="half">
          { sidebar }
        </GridColumn>
      </GridRow>
      <>{ after }</>
    </Basic>
  )
};

export default ContentSidebar;